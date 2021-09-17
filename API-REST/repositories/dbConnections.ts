import {mongodbSubastas} from './keys/keys';

export class SubastasData {
    private mongoose = require('mongoose');
    private subastasData : SubastasData

    private constructor(){
        this.mongoose.createConnection(mongodbSubastas.URI, {maxPoolSize : 5,
        minPoolSize : 1, connectTimeoutMS : 30000})
        .then(console.log('Db connected'))
        .catch((err: any) => console.log(err));
        this.mongoose.disconnect().then(() => console.log('Desconectado')).catch();
        
    }

    public getInstance(){
        if (this.subastasData == null) {
            this.subastasData = new SubastasData();
        }
        return this.subastasData;
    }
}
