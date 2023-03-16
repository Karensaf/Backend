const express = require('express')
const router = express.Router()
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')
const { protect } = require('../middleware/authMiddleware')

// router.get('/', getTareas)
// router.post('/', setTareas)
// router.put('/:id', updateTareas)
// router.delete('/:id', deleteTareas)

//?Se puede optimizar más de 4 a dos lineas de código
router.route('/').get(protect, getTareas).post(protect, setTareas)
router.route('/:id').put(protect, updateTareas).delete(protect, deleteTareas)

module.exports = router