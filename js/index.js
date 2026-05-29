// スクロールでNavbarのスタイルを切り替える
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Heroのふわっと表示
window.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    if (!heroContent) return;
    heroContent.style.opacity = 0;
    heroContent.style.transition = "opacity 1.2s ease";
    // requestAnimationFrame で確実にtransitionが効くようにする
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            heroContent.style.opacity = 1;
        });
    });
});
