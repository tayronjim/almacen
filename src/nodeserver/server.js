import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import items from "./api/items.route.js"
import proveedor from "./api/prov.route.js"

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Registro de rutas api
app.use("/api/items", items)
app.use("/api/prov", proveedor)
app.use("/", express.static("build"))
//app.use("*", (req, res) => res.status(404).json({error:"not found"}))

export default app