const express = require('express')
const router = express.Router();

const userController = require('../Controller/User.controller')
router.post("/create",userController.create)
router.get("/view",userController.view)
router.get("/view/:id",userController.viewById)
router.put("/update/:id",userController.update)
router.delete("/delete/:id",userController.deleteUser)

module.exports = router