document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("userName")) {
        window.location.href = "index.html";
        return;
    }
    
    const savedAvatar = localStorage.getItem("userAvatar");
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    const savedGithub = localStorage.getItem("userGithub");

    if (savedAvatar) {
        document.getElementById("display-avatar").src = savedAvatar;
    }

    if (savedName) {
        document.getElementById("display-name").textContent = savedName;
        document.getElementById("display-fullname").textContent = savedName;
    }

    if (savedEmail) {
        document.getElementById("display-email").textContent = savedEmail;
    }

    if (savedGithub) {
        document.getElementById("display-github").textContent =
            "@" + savedGithub;
    }
});