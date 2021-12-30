document.getElementById("person").innerHTML = localStorage.getItem("Username");

document.getElementById("logOut").addEventListener("click", function() {
    window.location.href = "/Login%20page";
    localStorage.setItem("IsLoged", false);
});
