var loginMiddleware = function(req, res, next){
    if(req.session.user){
        
        next();
    }
    else{
        
        res.redirect("/");
    }
};
var logueadoMiddleware = function(req, res, next){
    if(req.session.user){
        
        res.redirect('/iniciar-proyecto');
    }
    else{
        
        next();
    }
};

exports.logueadoMiddleware = logueadoMiddleware
exports.loginMiddleware = loginMiddleware