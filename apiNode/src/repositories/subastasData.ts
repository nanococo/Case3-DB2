import subastasModel from '../common/models/subastasModel';
const ObjectId = require('mongodb').ObjectId;


export class SubastasData {
    private static instance: SubastasData

    private constructor() {
    }
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SubastasData();
        }
        return this.instance;
    }

    public agregarSubasta(nombreProp: String, emailProp: String, nombreArticulo: String, descripcion: String,
        tags: [String], precioInicial: Number, fechaActual: Date, fechaExpiracion: Date,
        imagen: String, annoArticulo: Number): Promise<any> {
        return new Promise<any>(
            (resolve, rejects) => {

                const subasta = new subastasModel(
                    {
                        propietario: {
                            nombre: nombreProp,
                            email: emailProp
                        }
                        , nombreArticulo: nombreArticulo, descripcion: descripcion,
                        tags: tags, precioInicial, precioActual: precioInicial, fechaPublicacion: fechaActual, fechaExpiracion: fechaExpiracion,
                        imagen: imagen, annoArticulo: annoArticulo, pujas: []
                    }
                )
                console.log("hemos llegado")

                //console.log(subasta.db)

                subasta.save().then(() => {
                    resolve("Objeto agregado exitosamente")
                })
                    .catch((error: any) => {
                        rejects(error.message);
                    });


            }
        )

    }

    public async getSubastas() {
        let retData;
        await subastasModel.find().then(data => {
            //console.log(data)
            retData = data;
        });
        //console.log(retData)
        return retData;
    }

    public async updatePuja(id: string, name: string, email: string, date: Date, amount: number) : Promise<any> {
        let retData;
        let o_id = new ObjectId(id);
        let doc = await subastasModel.findOne({_id: o_id})
        console.log(doc)
        if(doc){
            if(amount > doc.precioActual){
                console.log("here");
                retData = await SubastasData.findAndUpdatePuja(id, name, email, date, amount);
            }
        }
        return retData;
    }

    private static async findAndUpdatePuja(id: string, name: string, email: string, date: Date, amount: number) : Promise<any> {
        let pujaObject = {
            nombre: name,
            email: email,
            fecha: date,
            monto: amount
        }
        let retData;
        await subastasModel.findOneAndUpdate({_id : id}, {precioActual : amount})
        await subastasModel.findOneAndUpdate({_id : id}, {$push : {pujas: pujaObject}}, {new:true}).then(data => {
            retData = data;
        });
        console.log(retData)
        return retData;
    }
}
