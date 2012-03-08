/**
 * Returns the object that represents the data which are in table.
 *
 */
exports.sequelizeResultToModel = function(sequelizeResult){
		jsonResult = {};
		sequelizeResult.attributes.forEach(function(attribute){
					jsonResult[attribute] = sequelizeResult[attribute]
		});

		return jsonResult;
}

/**
 * Returns a list of object that represents the data which are in table.
 *
 */
exports.sequelizeResultListToModel = function(sequelizeResult){
		jsonResult = [];
		sequelizeResult.forEach(function(item){
			jsonResult = getModelAttribute(item, jsonResult);
		});

		return jsonResult;
}

function getModelAttribute(item, jsonResult){
	jsonObj = {}
	item.attributes.forEach(function(attribute){
					jsonObj[attribute] = item[attribute]
	});

	jsonResult.push(jsonObj);
	
	return jsonResult;
}

