let num = "0";

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    num = window.localStorage.getItem('sroubek');   //  your code here
    console.log("num: " + num);
    document.getElementById("my_text").innerHTML = num;
    i++                     //  increment the counter
    if (i < 1000) {         //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop