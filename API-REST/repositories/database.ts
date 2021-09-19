import mongoose = require('mongoose')
import { mongodbSubastas } from './keys/keys'

mongoose.connect(mongodbSubastas.URI)