document.getElementById("person").innerHTML = localStorage.getItem("Username");

document.getElementById("logOut").addEventListener("click", function() {
    window.location.href = "http://localhost:5500/Login%20page";
    localStorage.setItem("IsLoged", false);
});