// Para el Backend se utiliza el require para importar, si en lugar se quiere utilizar la palabra import debemos crear la carpeta package.json
// con la palabra "type": "module" para que no salga error

//const http = require('http')
import http from 'http'
import {add} from './math.js'

console.log(add(100,100))