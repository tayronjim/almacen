const express = require('express');
const authRoutes = require('./auth/auth.routes');
const propierties = require('./config/properties');
//const bodyParser = require('body-parser');
//const bodyParserJSON = bodyParser.json();
//const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
const cors = require('cors');
const {MongoClient} = require('mongodb');

const mongo = new MongoClient('mongodb://localhost:27017/inventario');

//const DB = require('./config/db');

//DB();

//app.use(bodyParserJSON);
//app.use(bodyParserURLEncoded);

const app =  express();
app.use(cors());
app.use(express.json());
const router = express.Router();
app.use('/api',router);
authRoutes(router);
router.get('/',(req,res)=>{
    res.send('Hola mundo');
});
app.use(router);
app.listen(propierties.PORT, ()=>console.log(`Servidor corriendo en el puerto ${propierties.PORT}`));

