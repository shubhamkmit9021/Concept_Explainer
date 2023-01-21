

function outer() {

    let name = "shubham";
    return function inner() {
        console.log(name);
    }
}

let ans = outer();
ans();