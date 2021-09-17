const mongoose = require("mongoose") 

const subastasSchema = new mongoose.Schema({
    subasta : {
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

export default mongoose.model("Subastas",subastasSchema)