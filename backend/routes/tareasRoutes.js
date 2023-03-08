const express = require('express')
const router = express.Router()
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')

// router.get('/', getTareas)
// router.post('/', setTareas)
// router.put('/:id', updateTareas)
// router.delete('/:id', deleteTareas)

//?Se puede optimizar más de 4 a dos lineas de código
router.route('/').get(getTareas).post(setTareas)
router.route('/:id').put(updateTareas).delete(deleteTareas)

module.exports = router