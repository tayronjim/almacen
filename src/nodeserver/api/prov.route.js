import { Router } from "express";
import ProveedorCtrl from "./prov.controller.js"


const router = new Router()

router.route("/registrarprov").post(ProveedorCtrl.apiInsertProv)


export default router
