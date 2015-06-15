var mongoose = require('../connections/mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    
    usuario : {type : String, require : true},
    email : {type: String, require: true, index: {unique: true}},
    password : {type: String, require: true},
    creacion : {type: Date, default: Date.now}
    
})

var Usuario = mongoose.model('usuario', usuarioSchema);
module.exports = Usuario;