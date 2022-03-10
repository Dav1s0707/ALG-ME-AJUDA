const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://davi:12345@cluster0.zlujk.mongodb.net/fiap.alunos')
    
    //conexão local
   // mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
