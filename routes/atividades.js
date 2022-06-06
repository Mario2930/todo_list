const atividades = require('../models/atividades')

module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //exibindo no terminal
        //console.log(dados)
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
        
        // buscar todas as atividades desse usuario
        var buscar = await atividades.find({usuario:dados.id})
        //console.log(buscar)
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
    })

    //Excluir atividades
    app.get("/excluir",async(req,res)=>{
        //recuperar o parametro id da barra de indereço
        var id = req.query.id
        var excluir = await atividades.findOneAndRemove({
            _id:id
        })
        //voltar para a pagina atividades
        //res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
        res.send("Atividade Excluida")
    })
}