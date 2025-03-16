fetch("https://raw.githubusercontent.com/creora/website-control/main/status.txt")
.then(response => response.text())
.then(status => {
    if (status.trim() !== "open") {
        document.body.innerHTML = "<h1>Website Temporarily Unavailable</h1>";
    }
});
