var loginMiddleware = function(req, res, next){
    console.log("entro")
    if(req.session.user){
        console.log("next");
        next();
    }
    else{
        console.log("noentro");
        res.redirect("/");
    }
};

module.exports = loginMiddleware