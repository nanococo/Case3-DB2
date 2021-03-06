import mongoose = require('mongoose')

export default interface SubastaInterface extends mongoose.Document
{
    propietario : {
        nombre : String;
        email: String;
    };
    nombreArticulo : String;
    descripcion : String;
    tags : [String];
    precioinicial : Number;
    precioActual : Number;
    fechaPublicacion : Date;
    fechaExpiracion : Date;
    activo : Boolean;
    imagen : String;
    annoArticulo : Number;
    pujas : [
        {
            nombre : String;    
            email: String;
            fecha: Date;
            monto: Number;
        }
    ];
}