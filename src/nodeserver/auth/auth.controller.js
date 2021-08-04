const User = require('./auth.dao');


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { EmailValidator } = require('@angular/forms');
const SECRET_KEY = 'secret123456';

const {MongoClient} = require('mongodb');

const mongo = new MongoClient('mongodb://localhost:27017/inventario');

exports.createUser = (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }

    User.create (newUser,(err, user)=>{
        if(err && err.code == 11000) return res.status(409).send('email Existente');
        if (err) return res.status(500).send('Server error'); 
        const expiresIn = 24 * 60* 60;
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY, {expiresIn: expiresIn}    
        );

        const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }

        //response
        res.send({dataUser});
    });
}

exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
    }
    User.findOne({email:userData.email}, (err, user)=>{
        if(err) return res.status().send('Server error');
        if(!user){
            // El usuario no existe
            res.status(409).send({message: 'Algo salio mal'});
        } else{
            const resultPassword = userData.password;
            if(resultPassword){
                const expiresIn = 24 *60 *60;
                const accessToken = jwt.sign({id:user.id}, SECRET_KEY, {expiresIn:expiresIn});
                res.send({userData});
            }else{
                // la clave esta mal
                res.status(409).send({message: 'Algo salio mal'});
            }
        }
    });
}

exports.guardaInventario = (req, res, next) => {
    mongo.connect().then(async ()=>{
        mongo.db().collection('items').insertOne(req.body, ()=>{res.json({resultado:"correcto", datos:req.body})});
    });
}