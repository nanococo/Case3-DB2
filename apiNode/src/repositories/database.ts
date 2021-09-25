import mongoose = require('mongoose')
import { mongodbSubastas } from './keys/keys'

mongoose.connect(mongodbSubastas.URI2)
.then(() =>{
    console.log('connected to db David')
    console.log(mongoose.connection.readyState);
})
.catch((err: any)=>{
    mongoose.connect(mongodbSubastas.URI1).then(()=>{
        console.log('connected to db Sebastian')
        console.log(mongoose.connection.readyState);
    }
    ).catch((err: any)=>{
        console.log(err)
    })
})

