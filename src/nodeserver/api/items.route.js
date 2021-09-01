import { Router } from "express";
import ItemsCtrl from "./items.controller.js"

const router = new Router()

router.route("/registraritem").post(ItemsCtrl.apiInsertItems)
router.route("/listadogral").get(ItemsCtrl.apiGetItems)
router.route("/infoitem").post(ItemsCtrl.apiGetItem)
router.route("/actualizaitem").post(ItemsCtrl.apiUpdateItem)



export default router
