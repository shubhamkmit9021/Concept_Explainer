

// closure
function sum(a) {
    return function(b) {
        return a+b;
    }
}

var res = sum(5);
var res1 = res(10)
console.log(res1);
 

// currying

// function sum(a) {
//     return function(b) {
//         return a+b;
//     }
// }

// var res = sum(5)(10); //currying

// console.log(res);

