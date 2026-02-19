(function() {
    function paint() {
        const progress = document.getElementById("scrollProgress");
        if (!progress) {
            requestAnimationFrame(paint);
            return;
        }

        // Берем скролл отовсюду, где он может быть
        const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        
        // Берем МАКСИМАЛЬНУЮ высоту, которую найдем
        const height = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        ) - window.innerHeight;

        if (height > 0) {
            const scrolled = (winScroll / height) * 100;
            progress.style.width = scrolled + "%";
        }

        requestAnimationFrame(paint); // Зацикливаем проверку
    }
    paint();
})();

