let btnLogout = document.getElementById('logout-btn');
console.log(btnLogout);
btnLogout.onclick = function() {
    localStorage.removeItem("fullname");
    localStorage.removeItem("email");
    window.location.replace("index.html");
}

function check_User() {
    if (localStorage.getItem("fullname") && localStorage.getItem("email")) {
        document.getElementById('logout-btn').style.visibility = 'visible';
    }
}
check_User()