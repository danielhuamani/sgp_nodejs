var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sgp_node');

module.exports = mongoose;
