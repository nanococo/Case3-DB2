import {  Mongoose } from 'mongoose';
import {mongodbSubastas} from './keys/keys';

class dbConnections {
    private mongoose = new Mongoose();


    public constructor(){
        this.mongoose.connect(mongodbSubastas.URI)
        .then(db => console.log('Db connected'))
        .catch(err => console.log(err));
        this.mongoose.disconnect().then(db => console.log('Desconectado')).catch();
    }
}

export default new dbConnections();
