var restify = require('restify'),
		Sequelize = require('sequelize'),
		fs = require('fs'),
		utils = require('./sequelize-utils');

// Datasourse
var sequelize = new Sequelize('nodejs_computer_database', 'root', null);

// Model mapping
var Computer = sequelize.define('Computer', {
	id: Sequelize.INTEGER,
	name: Sequelize.STRING,
	company: Sequelize.STRING
});


// Server + route
var server = restify.createServer();
server.get('/computers', listComputer);
server.get('/computers/:id', getComputer);
server.put('/computers/:id', updateComputer);
server.post('/computers', saveComputer);


// Get All computers
function listComputer(req, res, next) {
	
	Computer.findAll().success(function(computers){
		var jsonResult = utils.sequelizeResultListToModel(computers);
		res.send(jsonResult);	
	});

}

// Get one computer
function getComputer(req, res, next) {

	var id = parseInt(req.params.id);
	
	Computer.find(id).success(function(computer){
		
		res.send(utils.sequelizeResultToModel(computer));

	}).error(function(error){
		console('Error ', error);
	});

}

/** 
 * Update Computer
 */
function updateComputer(req, res, next) {
  console.log('TODO : updateComputer ' + req.params.id);
}

/**
 * Save new computer
 */
function saveComputer(req, res, next) {
	console.log('TODO : saveComputer ');
}


// Start Server
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);

	Computer.sync().success(function(){
		console.log('Create database OK');
		
		// Test DATA
		var computer1 = Computer.build({
						id:1, 
						name:'Mac Book Pro',
						company: 'Apple'
		});
	
		var computer2 = Computer.build({
						id:2, 
						name:'Inspiron',
						company: 'Dell'
		});


		computer1.save().success(function(){
			console.log('Computer1 saved');
		});

		computer2.save().success(function(){
			console.log('Computer2 saved');
		});


	});

});
