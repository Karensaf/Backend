const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler(async (req, res) => {

    const tareas = await Tarea.find()

    res.status(200).json(tareas)
})

const setTareas = asyncHandler(async(req,res) => {

    if(!req.body.texto){     //? TEXTO es el nombre del campo
        //res.status(400).json({mensaje: 'Favor de teclear la descripcion de la tarea '})
        res.status(400)
        throw new Error('Favor de teclear la descripcion de la tarea ')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto
    })

    res.status(201).json(tarea)
})

const updateTareas = asyncHandler(async(req,res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(400)
        throw new Error('Tarea no encontrada')
    }

    const tareaModificada = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(tareaModificada)
})

const deleteTareas = asyncHandler(async(req,res) => {

    const tarea = await Tarea.findById(req.params.id)

    if(!tarea) {
        res.status(400)
        throw new Error ('Tarea no encontrada')
    }

    // await tarea.remove    //? Esta solo la borra si existe
    await tarea.deleteOne()

    //const tareaBorrada = await Tarea.findByIdAndDelete(req.params.id)  //? Es correcta pero ya no tiene caso q ponga cual va a borrar


    res.status(200).json({id: req.params.id})
})



module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}