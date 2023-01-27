
// callback function

// setInterval( () => {
//     console.log("Shbham");
// }, 1000);


// promise example

var promise = new Promise(function(resolve, reject) { 
    const x = "shubham"; 
    const y = "shubha";
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
      
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occurred'); 
      });


