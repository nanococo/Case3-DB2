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
    let date = req.body.date;
    let amount = req.body.amount;

    console.log(id);

    SubastasController.getInstance().updatePuja(id, name, email, date, amount);

    res.send({
        'id': id,
        'name': name,
        'email': email,
        'date': date,
        'amount': amount
    });
});


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


export { app as subastasrouter };