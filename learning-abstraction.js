// this rules
// it's handy that the second arguments are optional.

var ar = [1, 1, 2, 3, 5];

var arrayPlay = {
add1: ar.map(function(x){return x+1}),
index: ar.map(function(y, x){return x+1}),
wholearray: ar.map(function(y, x, z){return z}),
empty: ar.filter(function(x){return false}),
everything: ar.filter(function(x){return true}),
fold: ar.reduce(function(x, y){return x*y}),
fold0: ar.reduce(function(x, y){return x*y}, 0),
arrayFunctionCall: Array.prototype.map.call(ar, (function(x){return x+1})) // what does call do?
}


console.log(arrayPlay);