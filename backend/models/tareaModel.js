const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    texto: {
        type: String,
        required: [true, 'Por favor teclea una tarea']
    }
}, {
    timestamps: true  //? Esto es para definir la fecha de creación y de actualización o modificación
})

module.exports = mongoose.model('Tarea', tareaSchema)