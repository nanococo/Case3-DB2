import mongoose = require('mongoose')
import { mongodbSubastas } from './keys/keys'

mongoose.connect(mongodbSubastas.URI)
.then(() =>{
    console.log('connected to db')
    console.log(mongoose.connection.readyState);
})
.catch((err: any)=>{
    console.log(err)
})

