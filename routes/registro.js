module.exports = (app)=>{
    //abrir aview registro
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
}