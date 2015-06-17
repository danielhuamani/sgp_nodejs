var mongoose = require('../connections/mongoose');

var Schema = mongoose.Schema;

var usuariosSchema = new Schema({
    
    usuario : {type : String, require : true},
    email : {type: String, require: true, index: {unique: true}},
    password : {type: String, require: true},
    creacion : {type: Date, default: Date.now}
    
})

var Usuarios = mongoose.model('usuarios', usuariosSchema);
module.exports = Usuarios;