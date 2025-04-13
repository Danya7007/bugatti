document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContent = document.getElementById("menu-content");

    menuToggle.addEventListener("click", function () {
        menuContent.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!menuToggle.contains(e.target) && !menuContent.contains(e.target)) {
            menuContent.classList.remove("active");
        }
    });
});
