var data = [
	["19/10/2015", "Genoa", 14, 18, "Sunny"],
	["20/10/2015", "Genoa", 15, 18, "Cloudy"],
	["21/10/2015", "Genoa", 10, 12, "Sunny"],
	["19/10/2015", "Milan", 4, 9, "Sunny"],
	["20/10/2015", "Milan", 5, 12, "Cloudy"],
	["21/10/2015", "Milan", 10, 12, "Sunny"],
	["19/10/2015", "Rome", 24, 28, "Sunny"],
	["20/10/2015", "Rome", 25, 28, "Cloudy"],
	["21/10/2015", "Rome", 20, 22, "Sunny"]
];


// citta
// readdata

var city = function () {
	var DATE = 0;
	var CITY_NAME = 1;
	var MIN = 2;
	var MAX = 3;

	var _name;
	var _data = {};

	return {
		setData : function(data) {
			_name = data[CITY_NAME];
			_data[data[DATE]] = {};
			_data[data[DATE]].min = data[MIN];
			_data[data[DATE]].max = data[MAX];
		},
		data : _data,
		name : _name 
	};

};



(function main (){
	var collection = {};
	for (var i = 0; i < data.length; i ++) {
		var c = new city();
		c.setData(data[i]);
		collection[c.name] = c.data;
		console.log(JSON.stringify(collection, null, 2));
	}
})();

