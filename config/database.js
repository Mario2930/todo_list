//importar mongoose
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:eunaosei@fiaptecnico.cga0c.mongodb.net/dblr')
}

 //exportar as informações para acesso interno
 module.exports = conn