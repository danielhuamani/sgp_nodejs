var Middleware = require('../../middlewares/loginMiddleware');

var iniciarproyectoController = function(server){
    server.route("/iniciar-proyecto")
        .get(Middleware.loginMiddleware, function(req, res){
           user = req.session.user;
           res.render("proyecto/iniciar_proyecto.html", {user:user});
        })
    
    
    
}

module.exports = iniciarproyectoController;