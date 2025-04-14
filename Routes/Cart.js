const express = require('express')
const router = express.Router();

const cartController = require('../Controller/Cart.controller')
router.post("/create",cartController.create)
router.get("/view",cartController.view)
router.get("/view/:id",cartController.viewById)
router.put("/update/:id",cartController.update)
router.delete("/delete/:id",cartController.deleteCart)

module.exports = router