const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        require: [true, 'Por favor teclea una tarea']
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Tarea', tareaSchema)