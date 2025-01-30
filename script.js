document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById("back");
    const forwardBtn = document.getElementById("forward");
    const refreshBtn = document.getElementById("refresh");
    const goBtn = document.getElementById("go");
    const urlInput = document.getElementById("urlInput");
    const iframe = document.getElementById("iframe");

    let history = [];
    let currentIndex = -1;

    function loadUrl(url) {
        if (!url.startsWith("http")) url = "https://" + url;
        iframe.src = url;
        history = history.slice(0, currentIndex + 1);
        history.push(url);
        currentIndex = history.length - 1;
    }

    backBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            iframe.src = history[currentIndex];
        }
    });

    forwardBtn.addEventListener("click", () => {
        if (currentIndex < history.length - 1) {
            currentIndex++;
            iframe.src = history[currentIndex];
        }
    });

    refreshBtn.addEventListener("click", () => {
        iframe.src = history[currentIndex];
    });

    goBtn.addEventListener("click", () => loadUrl(urlInput.value));
    urlInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") loadUrl(urlInput.value);
    });
});
