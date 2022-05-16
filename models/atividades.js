// importar o mongoose
const mongoose = require('mongoose')

//criar estrutura para o armazenamento das informações do atividades
const modelo = mongoose.Schema({
    data:Date,
    tipo:String,
    entrega: String,
    disciplina:String,
    instrucoes:String,
    usuario:String
})

//gravar a estrutura na model atividades
const atividades = mongoose.model('atividades',modelo)

//exportar os dados para o acesso externo
module.exports = atividades