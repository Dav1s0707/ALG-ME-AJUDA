
module.exports = (app) =>{
    var conexao = require('../config/database')
    var profs = require('../models/prof')
    app.get('/professor', (req,res)=>{
        conexao()
        
        prof.find()
        .then((prof)=>{
            res.render('professor.ejs', {dados:prof})
        })
        res.render('professor.ejs')
        .catch((err)=>{
            console.log(err)
        })
    })

        app.post('/professor', (req,res)=>{
            var infos = req.body
            conexao()
            //var profs = require('../models/prof')
            var documento = new prof({
                nome:info.nome,
                disciplina:info.disciplina,
                email:info.email,
                rm:info.rm,
                idade:info.idade

            
             }).save()
             .then((result)=>{
                res.redirect('/professor')
             })
             .catch((err)=>{
                 console.log(err)
             })
    })
}
