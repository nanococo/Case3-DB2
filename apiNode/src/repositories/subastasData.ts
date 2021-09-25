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

    public agregarSubasta(propietario: [any], nombreArticulo: String, descripcion: String,
        tags: [String], precioInicial: Number,precioActual:Number, fechaPublicacion: Date,fechaExpiracion: Date,
        activo:Boolean, imagen: String, annoArticulo: Number, pujas:[any]): Promise<any> {
        return new Promise<any>(
            (resolve, rejects) => {

                const subasta = new subastasModel(
                    {
                        propietario: propietario
                        , nombreArticulo: nombreArticulo, descripcion: descripcion, precioinicial: precioInicial,
                        tags: tags, precioInicial, precioActual: precioActual, fechaPublicacion: fechaPublicacion, 
                        fechaExpiracion: fechaExpiracion,activo: activo,
                        imagen: imagen, annoArticulo: annoArticulo, pujas: pujas
                    }
                )
                //console.log("hemos llegado")

                //console.log(subasta.db)
                //console.log(subasta.$getPopulatedDocs)

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

    public async updatePuja(id: string, name: string, email: string, amount: number) : Promise<any> {
        let retData;
        let o_id = new ObjectId(id);
        let doc = await subastasModel.findOne({_id: o_id})
        console.log(doc)
        if(doc){
            if(amount > doc.precioActual){
                console.log("here");
                retData = await SubastasData.findAndUpdatePuja(id, name, email, amount);
            }
        }
        return retData;
    }

    private static async findAndUpdatePuja(id: string, name: string, email: string, amount: number) : Promise<any> {
        let pujaObject = {
            nombre: name,
            email: email,
            fecha: new Date(),
            monto: amount
        }
        let retData;
        await subastasModel.findOneAndUpdate({_id : id}, {precioActual : amount})
        await subastasModel.findOneAndUpdate({_id : id}, {$push : {pujas: pujaObject}}, {new:true}).then(data => {
            //console.log("Yay")
            retData = data;
        }).catch(error => console.log(error));
        //console.log(retData)
        return retData;
    }

    public async disable(id: string) : Promise<any> {
        await subastasModel.findOneAndUpdate({_id : id}, {activo : false})
        return Promise.resolve(undefined);
    }

    public async getSubastasFecha(fecha: Date):Promise<any> {
        
        return new Promise<any>((resolve, reject)=>{
            
        //console.log(retData)
        
        subastasModel.find({fechaExpiracion: fecha,activo: true}).then((data: any)=>{
            //console.log(data)
            resolve(data)
        }).catch((err: any)=>{
            reject(err)
            })
        })
    }
    public async getSubastasPrecios(min:number, max: number):Promise<any> {
        
        return new Promise<any>((resolve, reject)=>{
            
        //console.log(retData)
        
        subastasModel.find({precioActual: {$gte: min, $lte: max},activo: true}).then((data: any)=>{
            //console.log(data)
            resolve(data)
        }).catch((err: any)=>{
            reject(err)
            })
        })
    }
    public async getSubastasAnnos(anno:number):Promise<any> {
        
        return new Promise<any>((resolve, reject)=>{
            
        //console.log(retData)
        
        subastasModel.find({annoArticulo: anno,activo: true}).then((data: any)=>{
            //console.log(data)
            resolve(data)
        }).catch((err: any)=>{
            reject(err)
            })
        })
    }
}
