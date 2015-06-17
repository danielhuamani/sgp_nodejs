var User = require('../../models/usuarios');

var loginController = function(server){

    server.route('/')
        .get(function(req, res){
        res.render('auth/login');
            
        })
        .post(function(req, res){
        console.log(req.body.email)
            User.findOne({
                email: req.body.email,
                password: req.body.password },
                function(err, user){
                console.log(user.name)
                    if(user){
                        console.log("usuario logueado")
                    }
                    else{
                        console.log("DDDDusuario logueado")
                    }
                });
        })

}
module.exports = loginController;
/**/
