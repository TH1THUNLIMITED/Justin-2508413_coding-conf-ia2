// js/validation.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-data");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const avatar = document.getElementById("usr-img-avatar");
        const fullName = document.getElementById("usr-full-name").value.trim();
        const email = document.getElementById("usr-email").value.trim();
        const github = document.getElementById("usr-github").value.trim();

        localStorage.setItem("userName", fullName);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userGithub", github);

        if (avatar.files && avatar.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                localStorage.setItem("userAvatar", e.target.result);
                window.location.href = "ticket.html";
            };
            reader.readAsDataURL(avatar.files[0]);
        } else {
            window.location.href = "ticket.html";
        }
    });
});

