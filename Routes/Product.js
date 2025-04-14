const express = require('express')
const router = express.Router();

const productController = require('../Controller/Product.controller')
router.post("/create",productController.create)
router.get("/view",productController.view)
router.get("/view/:id",productController.viewById)
router.put("/update/:id",productController.update)
router.delete("/delete/:id",productController.deleteProduct)

module.exports = router