var User = require('../../models/usuarios');
var Middleware = require('../../middlewares/loginMiddleware');

var usuariosController = function(server){

    server.route("/registrar-usuario")
        .get(Middleware.loginMiddleware, function(req, res){
           user = req.session.user;
           res.render("proyecto/registrar_usuarios.html", {user:user});
        })
        .post(function(req, res){
        console.log("----------");
        console.log(req.body)
        console.log("----------");
            var Usuario = new User({
                usuario : req.body.nombre,
                email : req.body.email,
                password : req.body.password,
            });
            Usuario.save(function(err){
                if(err){
                    console.log(err);
                    res.render("proyecto/registrar_usuarios.html", {err:err});
                }
            })
            res.redirect('/iniciar-proyecto');
        })
    
    
}

module.exports = usuariosController;