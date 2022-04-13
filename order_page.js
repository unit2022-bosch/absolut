function order() {
    let prevodovky = document.getElementById("prevodovky").value;
    let pneu = document.getElementById("pneu").value;
    let volanty = document.getElementById("volanty").value;
    window.localStorage.setItem('prevodovky', prevodovky);
    window.localStorage.setItem('pneu', pneu);
    window.localStorage.setItem('volanty', volanty);
    document.getElementById("order_state").innerHTML = "Objednáno " + prevodovky + " převodovek, " + pneu + " pneumatik a " + volanty + " volantů.";
    document.getElementById("prevodovky").value = 0;
    document.getElementById("pneu").value = 0;
    document.getElementById("volanty").value = 0;

    return true;
}