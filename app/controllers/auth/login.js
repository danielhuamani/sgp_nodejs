var User = require('../../models/usuarios');
console.log(User)
var loginController = function(server){

    server.route('/')
        .get(function(req, res){
        res.render('auth/login');

        })
        .post(function(req, res){

        });

}
module.exports = loginController;
/**/
