let prevod = 0;
let pneum = 0;
let volantos = 0;

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    // prevod = prevod + parseInt(window.localStorage.getItem('prevodovky'));
    window.localStorage.setItem('sav_prevodovky', parseInt(window.localStorage.getItem('sav_prevodovky')) + parseInt(window.localStorage.getItem('prevodovky')));
    document.getElementById("prevodovka").innerHTML = parseInt(window.localStorage.getItem('sav_prevodovky'));
    window.localStorage.setItem('prevodovky', "0");

    window.localStorage.setItem('sav_pneu', parseInt(window.localStorage.getItem('sav_pneu')) + parseInt(window.localStorage.getItem('pneu')));
    document.getElementById("pneumatiky").innerHTML = parseInt(window.localStorage.getItem('sav_pneu'));
    window.localStorage.setItem('pneu', "0");

    window.localStorage.setItem('sav_volanty', parseInt(window.localStorage.getItem('sav_volanty')) + parseInt(window.localStorage.getItem('volanty')));
    document.getElementById("volant").innerHTML = parseInt(window.localStorage.getItem('sav_volanty'));
    window.localStorage.setItem('volanty', "0");

    i++                     //  increment the counter
    if (i < 100000) {         //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop