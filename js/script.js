document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.setItem("theme", "dark");
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
});
