import app from "./server.js"
import { MongoClient } from "mongodb"
import ItemsDAO from "./dao/itemsDAO.js"
import ProveedorDAO from "./dao/proveedorDAO.js"


const port = 8000

const MFLIX_DB_URI = "mongodb://localhost:27017/"

MongoClient.connect(
    MFLIX_DB_URI,
    {useNewUrlParser:true},
).catch(err =>{
    console.error(err.stack)
    process.exit(1)
}).then(async inventario =>{
    await ItemsDAO.injectDB(inventario)
    await ProveedorDAO.injectDB(inventario)

    app.listen(port, () => {
        console.log(`escuchando el puerto ${port}`)
    })
})