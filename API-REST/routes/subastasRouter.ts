import * as express from 'express';
import { Logger } from '../common/logger/logger'
import { SubastasController } from '../controllers'

const app = express();
const log = new Logger();

app.post("/agregar", (req, res, next) => {
    const { nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo } = req.body;
    SubastasController.getInstance().agregarSubasta(nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo)
        .then((data: any)=>{return res.json(data)})
        .catch((err: any)=>{
            return res.json(err)}
        )
})
export { app as subastasrouter };