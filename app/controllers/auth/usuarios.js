var User = require('../../models/usuarios');
var Middleware = require('../../middlewares/loginMiddleware');

var usuariosController = function(server, io){
    //on escucha el evento connection lepasamos el socket siempre y cuando este en listado de usuario
    io.on("connection", function(socket){
        //enviamos a un cuarto para que escuche solo cierto usuarios
        socket.join("listadousuarios");
    });
    //resgristar usuarios
    server.route("/registrar-usuario")
        .get(Middleware.loginMiddleware, function(req, res){
           user = req.session.user;
           res.render("proyecto/registrar_usuarios.html", {user:user});
        })
        .post(function(req, res){
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
                 io.to("listadousuarios").emit('crearusuario', {
                    usuario : req.body.nombre,
                    email : req.body.email,
                });
            })
            res.redirect('/iniciar-proyecto');
        })
    server.route("/listar-usuarios")
        .get(Middleware.loginMiddleware, function(req, res){
            var lista_usuario = User.find({
                },
                
                function(err, resultado){
                
               
                res.render("proyecto/lista_usuarios.html", {user:user, lista_usuarios:resultado});
            }).sort({creacion : 1});
            // a que cuarto debemos enviar la informacion y emit emitimos un evento
            
        })
    
}

module.exports = usuariosController;