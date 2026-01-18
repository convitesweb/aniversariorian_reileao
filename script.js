// Sparkles
        function createSparkle() {
            const container = document.querySelector('.container');
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }
        setInterval(createSparkle, 500);

        // Música
        const musica = document.getElementById('musica-fundo');
        const musicToggle = document.getElementById('music-toggle');
        const musicHint = document.getElementById('music-hint');
        musica.volume = 0.5;

        function toggleMusica() {
            if (musica.paused) {
                musica.play().then(() => {
                    musicToggle.classList.remove('muted');
                    musicHint.classList.add('hidden');
                }).catch(() => {});
            } else {
                musica.pause();
                musicToggle.classList.add('muted');
            }
        }

        // Autoplay
        musica.play().then(() => {
            musicToggle.classList.remove('muted');
            musicHint.classList.add('hidden');
        }).catch(() => {});

        // Contador - 8 de março de 2026 às 16h
        const dataFesta = new Date('2026-03-08T16:00:00');

        function atualizarContador() {
            const agora = new Date();
            const diferenca = dataFesta - agora;

            if (diferenca <= 0) {
                document.getElementById('dias').textContent = '00';
                document.getElementById('horas').textContent = '00';
                document.getElementById('minutos').textContent = '00';
                document.getElementById('segundos').textContent = '00';
                return;
            }

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
            document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
            document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
            document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
        }

        atualizarContador();
        setInterval(atualizarContador, 1000);

        // Modal Curiosidade
        function mostrarCuriosidade() {
            Swal.fire({
                title: '🦁 Você sabia?',
                html: '<p style="text-align: left; line-height: 1.8; color: #8B4513;">O correto em suaíli é <strong>Hakuna Matata</strong>, que significa "sem problemas" ou "sem preocupações", mas no Brasil, a Disney adaptou para <strong>Hatuna Matata</strong> na dublagem de "O Rei Leão" para evitar a sonoridade da palavra "Ku", mantendo o sentido original da música e dos personagens.</p>',
                confirmButtonText: 'Que legal!',
                confirmButtonColor: '#D4A03D',
                background: 'linear-gradient(145deg, #FFF8E7 0%, #FAEDDD 100%)',
                color: '#8B4513'
            });
        }