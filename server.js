var express = require('express'),
		swig = require('swig'),
		bodyParser = require('body-parser');

var server = express();

//express usara como swig como motor de template y renderiza ; luego que el moto de vista serae html
server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname+ '/app/views');

server.use(bodyParser.urlencoded({
		extended : true
}));
server.use(bodyParser.json())
//usamos el metodo static d e expres le pasamos la ruta
server.use(express.static('./public'));

require('./app/controllers/auth/login')(server);

server.listen(8006);
