import * as express from 'express';
import { Logger } from '../common'
import { SubastasController } from '../controllers'

const app = express();
const log = new Logger();

app.get("/list", (req, res,next) => {
    SubastasController.getInstance().listArticles()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });

});

app.post("/agregar", (req, res, next) => {
    
})
export { app as subastasrouter };