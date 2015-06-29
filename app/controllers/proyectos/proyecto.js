var logginMiddleware = require('../../middlewares/loginMiddleware');

var iniciarproyectoController = function(server){
    server.route("/iniciar-proyecto")
        .get(logginMiddleware, function(req, res){
           user = req.session.user;
           console.log(user)
           res.render("proyecto/iniciar_proyecto.html", {user:user});
        })
    
    
    
}

module.exports = iniciarproyectoController;