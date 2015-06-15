
var loginController = function(server){

    server.get('/', function(req, res){
        res.render('auth/login');
        
    })

}
module.exports = loginController;
/**/
