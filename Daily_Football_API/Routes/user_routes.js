const express = require('express')
const router = express.Router()
const userController = require("../Controllers/user_controller")

router.get('/show_user',userController.show_user)
router.post('/add_user',userController.insert_user)
// router.put('/update_user',userController.update_user)
// router.delete('/delete_user',userController.delete_user)


module.exports = router