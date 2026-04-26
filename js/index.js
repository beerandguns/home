// スクロールするとNavバーを少し暗くする
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.7)";
    } else {
        nav.style.background = "rgba(0,0,0,0.4)";
    }
});

// Heroのふわっと表示
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero-content").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".hero-content").style.transition = "1.2s";
        document.querySelector(".hero-content").style.opacity = 1;
    }, 200);
});
