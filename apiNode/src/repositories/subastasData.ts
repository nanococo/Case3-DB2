import subastasModel from '../common/models/subastasModel';
import { mongodbSubastas } from './keys/keys';
//import mongoose from 'mongoose'
import mongoose = require('mongoose')


export class SubastasData {
    private static instance: SubastasData
    private connection: mongoose.Connection
    
    private constructor() {
        //const mongoose = require('mongoose')
        try {
            mongoose.connect(mongodbSubastas.URI)
            this.connection = mongoose.connection
            console.log('db connected')
        } catch (error) {
            console.log("FAIL")
            process.exit(0)
        }
        /*
        mongoose.connect(mongodbSubastas.URI)
        .then(()=>{
            console.log("DB connected")
        }).catch((err: any)=>{
            console.log(err)
        })
        */
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
                console.log("aasdasdas")

                subasta.save()

                //console.log(subasta.db)
                /*
                subasta.save().then(() => {
                    resolve("Objeto agregado exitosamente")
                })
                    .catch((error: any) => {
                        rejects(error.message);
                    });
                */

            }
        )
        
    }
}
