module.exports = (app) =>{
    app.get('/professor',(req,res)=>{
        res.render('professor.ejs')
    })
}