import SubastaInterface from "../interfaces/subasta";
//import { mongo } from "mongoose";
import { Mongoose, Schema  } from 'mongoose'

const mongoose: Mongoose = require('mongoose')


const subastasSchema = new Schema({
    propietario : {
        nombre : String,
        email: String
    },
    nombreArticulo : String,
    descripcion : String,
    tags : [String],
    precioinicial : Number,
    precioActual : Number,
    fechaPublicacion : Date,
    fechaExpiracion : Date,
    activo : Boolean,
    imagen : String,
    annoArticulo : Number,
    pujas : [
        {
            nombre : String,
            email: String,
            fecha: Date,
            monto: Number
        }
    ]
});
const subastasModel = mongoose.model<SubastaInterface>("Articulos",subastasSchema);
export default subastasModel