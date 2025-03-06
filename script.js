document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    const progressBars = document.querySelectorAll(".progress-bar");
    function animateProgressBars() {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > document.getElementById("skills").offsetTop - 300) {
            animateProgressBars();
        }
    });

    const form = document.getElementById("contact-form");
    const alertBox = document.getElementById("form-alert");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alertBox.textContent = "Message Sent Successfully!";
        alertBox.className = "alert alert-success";
        alertBox.classList.remove("d-none");
        setTimeout(() => alertBox.classList.add("d-none"), 3000);
        form.reset();
    });
});
