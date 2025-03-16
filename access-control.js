fetch("https://raw.githubusercontent.com/creora/website-control/main/status.txt")
.then(response => response.text())
.then(status => {
    if (status.trim() !== "open") {
        window.location.href = "https://your-custom-error-page.com"; // Change this to any page
    }
});
