import mongoose = require('mongoose')
import { mongodbSubastas } from './keys/keys'

mongoose.connect(mongodbSubastas.URI)
.then(() =>console.log('connected to db'))
.catch((err: any)=>{
    console.log(err)
})