// Dare nomi
// - Autoesplicativo
// - uniformita' -> disambigua 
// - nome legato piu' a quello che ritorna piuttosto a quello che fa 

// valutare quali potrebbero essere le richieste di cambiamento

var diffInMillisecond = function(date01, date02) {
	var millisecondsFrom1970_01 = date01.getTime();
	var millsecondsFrom1970_02 = date02.getTime();

	return Math.abs(Math.abs(millisecondsFrom1970_01) - Math.abs(millsecondsFrom1970_02));
};

var daysFromMilliseconds = function(timestamp){
	var MILLISECOND_PER_DAYS = (60*60*24*1000);
	return new Date(timestamp)/(MILLISECOND_PER_DAYS);
};

var calcDiff = function(date01, date02) {

	var timestampDiff = diffInMillisecond(date01, date02);
	var daysDiff = daysFromMilliseconds(timestampDiff);

	return parseInt(daysDiff, 10);
};


var date01 = new Date(2015, 11, 01);
var date02 = new Date(2015, 11, 10);
var out = calcDiff(date01, date02);

console.log("------------------------------------");
console.log(out);
