import * as express from 'express';
import { Logger } from '../common'
import { Response, Request } from 'express';
import { SubastasController } from '../controllers'

const app = express.Router();
const log = new Logger();

app.post("/agregar", (req:Request, res: Response, next) => {
    const { nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo } = req.body;
    SubastasController.getInstance().agregarSubasta(nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo).then((msg: any)=>{
            res.json(msg)
        }).catch((err: any)=>{
            res.json(err)
        })
        
})
export { app as subastasrouter };