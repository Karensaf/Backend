const express = require('express')
const router = express.Router()
//const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')//?Ahora si es el real
const  { registerUser } =require('../controllers/userControllers')

// router.route('/').get(getUsers).post(setUsers)
// router.route('/:id').put(updateUsers).delete(deleteUsers)
router.post('/', registerUser)

module.exports = router