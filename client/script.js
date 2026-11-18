document.addEventListener("DOMContentLoaded", function () {
    console.log("Accessibility Audit Dashboard Loaded!");

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
        section.style.transition = "0.3s";
    });
});
