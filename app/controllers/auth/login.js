var User = require('../../models/usuarios');

var loginController = function(server){

    server.route('/')
        .get(function(req, res){
        res.render('auth/login');

        })
        .post(function(req, res){

            User.findOne({
                email: req.body.email,
                password: req.body.password },
                function(err, user){
                
            
                    if(user){
                        req.session.user = req.body.email;
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
