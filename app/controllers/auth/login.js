var User = require('../../models/usuarios');
var Middleware = require('../../middlewares/loginMiddleware');
var loginController = function(server){

    server.route('/')
        .get(Middleware.logueadoMiddleware ,function(req, res){
        res.render('auth/login');
          
                
        })
        .post(function(req, res){

            User.findOne({
                email: req.body.email,
                password: req.body.password },
                function(err, user){              
            
                    if(user){
                        console.log(user)
                        req.session.user = user;
                        res.redirect('/iniciar-proyecto');
                    }
                    else{
                        res.render('auth/login',{ success : false, message : 'Error al loguearse' });
                    }
                });
        })

}
module.exports = loginController;
/**/
