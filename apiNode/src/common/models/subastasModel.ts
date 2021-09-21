import SubastaInterface from "../interfaces/subasta";
//import { mongo } from "mongoose";
import mongoose = require('mongoose')

const subastasSchema = new mongoose.Schema({
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

export default mongoose.model<SubastaInterface>("Articulos",subastasSchema, "Articulos");
