var inc = function(x) {
	return x + 1;
}

var counter = function() {
	this.count += 1;
	return this.count;
}

var Inc = function() {
	return function(x) {
		inc(x);
	}
}

var Counter = function() {
	return function() {
		this.count += 1;
		return this.count;
	}
}

var CounterFrom = function (z) {
	return function() {
		this.initial = z;
		return function() {
			this.count += 1;
			return z + this.count;
		}
	}
}

var makeArray = function(n, v) {
	var array;
	for(var i = 0; i < n; ++i) {
		array.push(v);
	}
	return array;
}

var carefulArrayChecking = function(n, v) {
	var exception = {name : "BadSize"};
	if(n < 0) {
		exception.message = "Negative Size";
	} else if(!isNaN(n)) {
		exception.message = "Size is not a number";
	} else {
		return true;
	}
	return exception;
}

var carefulMakeArray = function(n, v) {
	if(carefulArrayChecking(n)) {
		makeArray(n,v);
	}
}

var incArray = function(n) {
	var inc = Inc;
	carefulMakeArray(n, inc);
}

var counterFromArray = function(n) {
	var counterArray;
	if(carefulArrayChecking(n)) {
		for(var i; i < n; ++i) {
			var counter = CounterFrom(i);
			counterArray.push(counter);
		}
	}
	return counterArray;
}

inc(4);

counter();

var inc = Inc;
inc(4);

var count = Counter();
count();
count();

var countfrom = CounterFrom(5);
countfrom();

var array1 = makeArray(6, 3);

var carray1 = carefulMakeArray(6, 3);
var carray2 = carefulMakeArray(-2, 3);
var carray3 = carefulMakeArray(4, "eben");

var incarray = incArray(5);

var countarray = counterFromArray(6);

