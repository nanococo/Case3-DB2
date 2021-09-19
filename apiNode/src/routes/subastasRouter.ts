import * as express from 'express';
import { Logger } from '../common'
import { Response, Request } from 'express';
//import { SubastasController } from '../controllers'

const app = express.Router();
const log = new Logger();

app.post("/agregar", (req:Request, res: Response, next) => {
    const { nombreProp, emailProp, nombreArticulo, descripcion,
        tags, precioInicial, fechaActual, fechaExpiracion,
        imagen, annoArticulo } = req.body;
    
        res.json("Llega")
})
export { app as subastasrouter };