function inc(x) {
	return x + 1;
}

var counter = (function() {
	var count = 0;
	return function() {
		console.log(count + 1);
		return count += 1;
	}
})();

var Counter = function() {
	return (function() {
		var count = 0;
		return function() {
			console.log(count + 1);
			return count += 1;
		}

	})();
}

var Inc = function() {
	return function(x) {
		console.log(x+1);
		return x + 1;
	}
}

var CounterFrom = function(z) {
	return (function() {
		var count = 0;
		return function() {
			console.log(z + count + 1);
			count += 1;
			return z + count;
		}
	})();
}

function makeArray(n, v) {
	var array = [];
	for(var i = 0; i < n; ++i) {
		array.push(v);
	}
	console.log(array);
	return array;
};

function carefulArrayChecking(n) {
	var exception = {name : "BadSize"};
	if(n < 0) {
		exception.message = "Negative Size";
	} else if(isNaN(n)) {
		exception.message = "Size is not a number";
	} else {
		return true;
	}
	return exception;
}

function carefulMakeArray(n, v) {
	if(carefulArrayChecking(n)) {
		makeArray(n, v);
	}
}

function incArray(n) {
	var increment = Inc();
	carefulMakeArray(n, increment);
}

function counterFromArray(n) {
	var counterArray = [];
	if(carefulArrayChecking(n)) {
		for(var i = 0; i < n; ++i) {
			var countFrom = CounterFrom(i);
			counterArray.push(countFrom);
		}
	}
	return counterArray;
}

carefulMakeArray(1, 2);

/*
console.log(makeArray(5, 4));

var increment = Inc();
increment(6);

console.log("initial count");
counter();
counter();
counter();

var count1 = Counter();
console.log("count1");
count1();
count1();

var count2 = Counter();
console.log("count2");
count2();
count2();
count2();

var countfrom1 = CounterFrom(5);
console.log("count from 5");
countfrom1();
countfrom1();

var countfrom2 = CounterFrom(15);
console.log("count from 15");
countfrom2();
countfrom2();
countfrom2();
*/