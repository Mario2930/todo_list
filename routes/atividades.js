const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{
    //criar a rota para renderizar a view atividades
    app.get('/atividades',async(req,res)=>{
        // capturar o id da barra de endereço
        var id= req.query.id
        //buscar o nome na collection usuarios
        var user = await usuarios.findOne({_id:id})
        //buscar todas as atividades desse usuario
        var buscar = await atividades.find({usuario:id})
        //console.log(buscar)
        res.render('atividades.ejs',{nome:user.nome,id:user._id,dados:buscar})
    })

    //gravar as informações do formulário na colection atividades
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //conectar com o banco de dados
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulario njo database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            entrega:dados.entrega,
            materia:dados.materia,
            instrucoes:dados.orientacao,
            usuario:dados.id
        }).save()
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+dados.id)
    })

    //Excluir atividades
    app.get("/excluir",async(req,res)=>{
        //recuperar o parametro id da barra de indereço
        var id = req.query.id
        var excluir = await atividades.findOneAndRemove({
            _id:id
        })
        res.redirect('/atividades?id='+excluir.usuario)
    })
}