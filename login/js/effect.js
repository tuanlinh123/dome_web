function toggleForm() {
    var container = document.querySelector('.container');
    container.classList.toggle('active')
}

let btnBack = document.getElementById('btnBack');
btnBack.onclick = function() {
    window.location.replace("../index.html");
}