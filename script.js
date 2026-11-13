document.addEventListener("DOMContentLoaded", () => {
    // 1. Gerar céu estrelado dinâmico
    const starsContainer = document.getElementById("stars-container");
    const starCount = 90;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Posição, tamanho e duração da piscada aleatórios
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty("--duration", `${duration}s`);

        starsContainer.appendChild(star);
    }

    // 2. Animação de revelação dos cards ao rolar a página
    const cards = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach((card) => observer.observe(card));
});