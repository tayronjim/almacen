import ItemsDAO from "../dao/itemsDAO.js"

export default class ItemsController {
    static async apiInsertItems(req, res, next){
       // registrarItem
       try{
           let errors = {}
            const query = req.body;
            const insertItemResult = await ItemsDAO.registrarItem(query)
            if(!insertItemResult.success){
            errors = insertItemResult.error
         }

         if (Object.keys(errors).length > 0) {
             res.status(400).json(errors)
         }
         else{
            let response = {
                status: "ok"
            }
            res.json(response)
         }
         
       }catch(e){
        res.status(500).json({error:e})
       }
       
    }

    static async apiGetItems(req,res,next){
        const listadoInventarioGral = await ItemsDAO.listGralInv()
        res.json(listadoInventarioGral)
    }

    static async apiGetItem(req, res, next){
        console.log(req.body);
        const datosInventario = await ItemsDAO.datosInv(req.body);
        res.json(datosInventario);
    }

    static async apiUpdateItem(req, res, next){
        await ItemsDAO.updateItem(req.body)
        res.json({status:"ok"});
    }
}