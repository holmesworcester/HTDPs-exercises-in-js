// Constants

const TAX_THRESHOLD = 1000;
const LUX_TAX_THRESHOLD = 10000;
const TAX = 0.05;
const LUX_TAX = 0.08;

// Data definitions

// A Price is a Number that falls into one of three intervals: 
// — 0 through TAX-THRESHOLD//
// — TAX-THRESHOLD through LUX-TAX-THRESHOLD//
// — LUX-TAX-THRESHOLD and above.
// interpretation the price of an item

// Functions

// Price -> Number
// computes the amount of tax charged for price p

var salesTax = function(price) {

	if (price < TAX_THRESHOLD) {
		return 0;
	}

	else if ((price >= TAX_THRESHOLD) && (price < LUX_TAX_THRESHOLD)) {
		return price * TAX;
	}

	else if (price >= LUX_TAX_THRESHOLD) {
		return price * LUX_TAX;
	}
}

console.log(salesTax(10000000000));

if (salesTax(0) != 0) throw "fail";
if (salesTax(1) != 0) throw "fail";
if (salesTax(999) != 0) throw "fail";
if (salesTax(1000) != (TAX * 1000)) throw "fail";
if (salesTax(9999) != (TAX * 9999)) throw "fail";
if (salesTax(12017) != (LUX_TAX * 12017)) throw "fail";
if (salesTax(1000000) != (LUX_TAX * 1000000)) throw "fail";


