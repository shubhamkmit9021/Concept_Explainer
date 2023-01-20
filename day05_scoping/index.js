 
 // Global Scope
// var name = "shubham";

// function fun1 () {
//     console.log(name);
// }


// fun1();


// Local scope 



function fun1 () {
    var val = true
    if(val) {
        let x = 10;
        console.log(x);
    }
}


fun1();