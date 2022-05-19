module.exports = (app)=>{
    //abrir aview registro
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar os dados do formulario no database
    app.post('/registro',(req,res)=>{
        //recuperar as informações do formulario
        var dados = req.body
        //exibir o conteudo de dados no console
        console.log(dados)
    })
}