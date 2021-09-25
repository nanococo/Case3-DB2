import * as express from 'express';
import { Logger } from '../common'
import { Response, Request } from 'express';
import { SubastasController } from '../controllers'
import * as path from 'path';

const app = express.Router();
const log = new Logger();

app.use(express.static(path.join(__dirname, 'content')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/puja", (req:Request, res: Response, next) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let amount = req.body.amount;

    SubastasController.getInstance().updatePuja(id, name, email, amount);
    res.sendStatus(200);
});

app.delete("/darDeBaja", (req:Request, res: Response, next) => {
    let id = req.body.id;
    SubastasController.getInstance().disable(id)
    res.sendStatus(200);
});

app.post("/agregar", (req:Request, res: Response, next) => {
    const { propietario, nombreArticulo, descripcion,
        tags, precioInicial, precioActual, fechaPublicacion, fechaExpiracion,
        activo, imagen, annoArticulo, pujas } = req.body;
    SubastasController.getInstance().agregarSubasta(propietario, nombreArticulo, descripcion,
        tags, precioInicial, precioActual, fechaPublicacion, fechaExpiracion,
        activo, imagen, annoArticulo, pujas).then((msg: any)=>{
        res.json(msg)
    }).catch((err: any)=>{
        res.json(err)
    })

})

app.get(
    "/getAll",
    (req:Request, res:Response) => {

        let a = SubastasController.getInstance().getSubastas();
        a.then(data => {
            res.send(data)
            //console.log(JSON.parse(JSON.stringify(data)))
        })
    }
);

app.get(
    "/getbydate",(req:Request, res:Response) => {
        const fecha = req.query["fecha"].toString();
        //console.log(fecha)
        const fecha1 = new Date(fecha)
        //console.log(fecha1)
        let a = SubastasController.getInstance().getSubastasFecha(fecha1);
        a.then((data:any) => {
            //console.log(data)
            res.send(data)
            
            //console.log(JSON.parse(JSON.stringify(data)))
        }).catch((err:any) =>{
            res.send(err)
        })
    }
)
app.get(
    "/getbyprices",(req:Request, res:Response) => {
        const min = req.query["min"].toString();
        const max = req.query["max"].toString();
        
        let a = SubastasController.getInstance().getSubastasPrecios(parseInt(min), parseInt(max));
        a.then((data:any) => {
            //console.log(data)
            res.send(data)
            
            //console.log(JSON.parse(JSON.stringify(data)))
        }).catch((err:any) =>{
            res.send(err)
        })
    }
)

app.get(
    "/getbyanno",(req:Request, res:Response) => {
        const anno = req.query["anno"].toString();
        
        let a = SubastasController.getInstance().getSubastasAnno(parseInt(anno));
        a.then((data:any) => {
            //console.log(data)
            res.send(data)
            
            //console.log(JSON.parse(JSON.stringify(data)))
        }).catch((err:any) =>{
            res.send(err)
        })
    }
)
export { app as subastasrouter };
