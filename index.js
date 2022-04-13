console.log("This is index.js");


function loginUser() {
    document.user_form.action = "login.html";
    let name = document.getElementById('name').value;
    let password = document.getElementById('user_password').value;
    // alert(document.user_form.action);
    if (name && password) {
        if (name == "admin" && password == "admin") {
            document.user_form.action = "admin_page.html";
            return true;
        } else if (name == "order" && password == "order") {
            document.user_form.action = "order_page.html";
            return true;
        } else if (name == "storage" && password == "storage") {
            document.user_form.action = "storage_page.html";
            return true;
        } else if (name == "logis" && password == "logis") {
            document.user_form.action = "logistics_page.html";
            return true;
        } else {
            alert("Invalid name or password");
        }
    } else {
        alert("Name or password not entered");
    }
    return false;
  }
