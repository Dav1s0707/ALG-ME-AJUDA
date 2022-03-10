const mongoose = require('mongoose')

const modelo = new mongoose.Schema({
    nome:String,
    rm:String,
    disciplina:String,
    idade:String,
    email:String

})

module.exports = mongoose.model('alunos',modelo)