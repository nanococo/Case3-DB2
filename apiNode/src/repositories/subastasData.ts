import subastasModel from '../common/models/subastasModel';


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
}
