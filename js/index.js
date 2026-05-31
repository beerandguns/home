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

// ===== Gallery Slider =====
(function () {
    var track = document.getElementById("gallery-track");
    var prev  = document.getElementById("gallery-prev");
    var next  = document.getElementById("gallery-next");
    var dotsContainer = document.getElementById("gallery-dots");
    if (!track) return;

    var items = track.querySelectorAll(".gallery-item");
    var current = 0;

    // 画面幅に応じた表示枚数
    function getVisible() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function totalPages() {
        return Math.ceil(items.length / getVisible());
    }

    // ドット生成
    function buildDots() {
        dotsContainer.innerHTML = "";
        for (var i = 0; i < totalPages(); i++) {
            var dot = document.createElement("span");
            dot.className = "gallery-dot" + (i === current ? " active" : "");
            dot.dataset.index = i;
            dot.addEventListener("click", function () {
                goTo(parseInt(this.dataset.index));
            });
            dotsContainer.appendChild(dot);
        }
    }

    function goTo(page) {
        current = Math.max(0, Math.min(page, totalPages() - 1));
        var itemWidth = items[0].offsetWidth + 20; // gap込み
        track.scrollLeft = current * getVisible() * itemWidth;
        updateUI();
    }

    function updateUI() {
        prev.disabled = current === 0;
        next.disabled = current >= totalPages() - 1;
        var dots = dotsContainer.querySelectorAll(".gallery-dot");
        dots.forEach(function (d, i) {
            d.classList.toggle("active", i === current);
        });
    }

    prev.addEventListener("click", function () { goTo(current - 1); });
    next.addEventListener("click", function () { goTo(current + 1); });
    window.addEventListener("resize", function () { buildDots(); goTo(0); });

    buildDots();
    updateUI();
})();