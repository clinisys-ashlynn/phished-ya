const letters = document.querySelectorAll("#wave-text span");

    function animateWave() {
        const time = Date.now() / 200;

        letters.forEach((letter, index) => {
            const y = Math.sin(time + index * 0.5) * 15;
            letter.style.transform = `translateY(${y}px)`;
        });

        requestAnimationFrame(animateWave);
    }

    animateWave();