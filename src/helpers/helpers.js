
var exports = module.exports = {};

// MAP UNIX TIME TO NORMAL TIME
exports.getFormattedTime = function(the_time) {
	var time = new Date(the_time * 1000)
	let h = time.getHours()
	let m = "0" + time.getMinutes()
	let s = "0" + time.getSeconds()
	return h + ':' + m.substr(-2) + ':' + s.substr(-2);
}