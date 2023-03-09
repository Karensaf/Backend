const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler(async(req,res) => {

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

    res.status(201).json({mensaje:'Crear una tarea nueva'})
})

const updateTareas = asyncHandler(async(req,res) => {
    res.status(200).json({mensaje:`Modificar la tareota ${req.params.id}`})
})

const deleteTareas = asyncHandler(async(req,res) => {
    res.status(200).json({mensaje:`Borrar la tareita ${req.params.id}`})
})

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}