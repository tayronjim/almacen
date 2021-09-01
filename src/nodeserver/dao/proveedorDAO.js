import { ObjectId } from "bson"

let proveedor
const DB = "inventario"


export default class ProveedorDAO {

    static async injectDB(conn){
        if (proveedor) {
            return
        }
        try{
            proveedor = await conn.db(DB).collection("proveedores")
            this.proveedor = proveedor
            
        }catch(e){
            console.error("falla conexion con base de datos")
        }
    }

    static async registrarProv(provInfo){
        console.log(provInfo)

        try{
            await proveedor.insertOne(provInfo)

            return {success: true}
        }catch(e){
            console.error('error insertando proveedor nuevo')
            return {error: e}
        }
    }
    
}