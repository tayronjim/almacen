import ProveedorDAO from "../dao/proveedorDAO.js";

export default class ProvController {
    static async apiInsertProv(req, res, next){
        try{
            let errors = {}
             const query = req.body;
             const insertProvResult = await ProveedorDAO.registrarProv(query)
             if(!insertProvResult.success){
             errors = insertProvResult.error
             console.log(errors)
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

}