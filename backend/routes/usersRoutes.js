const express = require('express')
const router = express.Router()
//const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')//?Ahora si es el real
const  { registerUser, loginUser, getMisDatos } =require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(getUsers).post(setUsers)
// router.route('/:id').put(updateUsers).delete(deleteUsers)
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/misdatos', protect, getMisDatos)

module.exports = router