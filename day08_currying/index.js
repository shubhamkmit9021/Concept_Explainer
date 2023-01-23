

// Function Example

// function Sum(a,b) {
//     return a+b;
// }

// let res = Sum(5,10);
// console.log(res);




// Closure Example

// function Area(length){
//     return function(width) {
//         return function(height) {
//             return length*width*height;
//         }
//     }
// }

// let res1 = Area(10);
// let res2 = res1(10);
// let res3 = res2(10);
// console.log(res3)

 // Currying Example

function Area(length){
    return function(width) {
        return function(height) {
            return length*width*height;
        }
    }
}

let res1 = Area(10)(10)(10);
console.log(res1)