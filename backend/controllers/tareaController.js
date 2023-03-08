const getTareas = (req,res) => {
    res.status(200).json({mensaje:'Mostrar las Tareas'})
}

const setTareas = (req,res) => {

    if(!req.body.texto){     //? TEXTO es el nombre del campo
        //res.status(400).json({mensaje: 'Favor de teclear la descripcion de la tarea '})
        res.status(400)
        throw new Error('Favor de teclear la descripcion de la tarea ')
    }

    res.status(201).json({mensaje:'Crear una tarea nueva'})
}

const updateTareas = (req,res) => {
    res.status(200).json({mensaje:`Modificar la tareota ${req.params.id}`})
}

const deleteTareas = (req,res) => {
    res.status(200).json({mensaje:`Borrar la tareita ${req.params.id}`})
}

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}