import { ObjectId } from "bson"


let items
const DB = "inventario"

export default class ItemsDAO {
    static async injectDB(conn){
        if (items) {
            return
        }
        try{
            items = await conn.db(DB).collection("items")
            this.items = items
            
        }catch(e){
            console.error("falla conexion con base de datos")
        }
    }


    static async registrarItem(itemInfo){
        console.log(itemInfo)

        try{
            await items.insertOne(itemInfo)

            return {success: true}
        }catch(e){
            console.error('error insertando item nuevo')
            return {error: e}
        }
    }

    static async listGralInv(){
        const listado = await items.find({}).toArray();
        return listado
    }

    static async datosInv(id){
        console.log(id);
        const oid = new ObjectId(id.id);
        const datosItem = await items.findOne({_id:oid});
        return datosItem;
    }

    static async updateItem(item){
        console.log(item);
        const datos = item.item;
        const oid = new ObjectId(item.id);
        await items.updateOne({_id:oid},{$set:datos});

    }
    
}

