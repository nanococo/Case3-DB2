import * as express from 'express';
import { Logger } from '../common'
import { SubastasController } from '../controllers'

const app = express();
const log = new Logger();

app.post("/agregar", (req, res, next) => {
    const { nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo } = req.body;
    SubastasController.getInstance().agregarSubasta(nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo).then(()=>{res.json("Logrado")})
        .catch((err: any)=>{
            res.json(err)}
        )
})
export { app as subastasrouter };