document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("open");

        const isOpen = menu.classList.contains("open");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    const menuItems = menu.querySelectorAll(":scope > li");

    menuItems.forEach(function (li) {
        const sub = li.querySelector(".submenu");
        const link = li.querySelector(":scope > a");

        if (!sub || !link) return;

        link.addEventListener("click", function (e) {
        if (window.innerWidth > 768) return;

        e.preventDefault();
        sub.classList.toggle("open");
        });
    });
});
