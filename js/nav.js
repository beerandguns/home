$(document).ready(function () {

    // ===== スムーズスクロール共通関数 =====
    function scrollTo(target, offset) {
        offset = offset || 80;
        var $target = $(target);
        if ($target.length === 0) return;
        $("html, body").animate({
            scrollTop: $target.offset().top - offset
        }, 800, "swing");
        // スマホメニューが開いていたら閉じる
        closeMenu();
    }

    // ===== ナビリンク =====
    $("#nav-home").on("click", function () { scrollTo("#hero"); });
    $("#nav-fe").on("click",   function () { scrollTo("#features"); });
    $("#nav-dis").on("click",  function () { scrollTo("#discord"); });
    $("#nav-about").on("click",function () { scrollTo("#About"); });

    // CTAボタン
    $("#cta").on("click", function () { scrollTo("#discord"); });

    // ===== ハンバーガーメニュー =====
    var $toggle = $(".nav-toggle");
    var $navLinks = $(".nav-links");

    function closeMenu() {
        $toggle.removeClass("open");
        $navLinks.removeClass("open");
    }

    $toggle.on("click", function () {
        var isOpen = $(this).hasClass("open");
        if (isOpen) {
            closeMenu();
        } else {
            $toggle.addClass("open");
            $navLinks.addClass("open");
        }
    });

    // メニュー外をクリックしたら閉じる
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".navbar").length) {
            closeMenu();
        }
    });

});
