document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA O MENU MOBILE (HAMBURGER) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- SIMULAÇÃO DA API DO INSTAGRAM ---
    // IMPORTANTE: Esta é uma simulação. Para uma integração real,
    // é necessário usar a API oficial do Instagram ou um serviço de terceiros (widget).
    // Esta simulação usa imagens de placeholder para demonstrar o layout.
    
    const instagramContainer = document.getElementById('insta-grid');

    if (instagramContainer) {
        // Substitua por suas próprias URLs de imagem e links de posts
        const mockPhotos = [
            {
                imgSrc: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=870&auto=format&fit=crop',
                postUrl: '#', // Link para o post do Instagram
                altText: 'Maquiagem profissional em modelo'
            },
            {
                imgSrc: 'https://images.unsplash.com/photo-1606249613612-875f1cb35436?q=80&w=870&auto=format&fit=crop',
                postUrl: '#',
                altText: 'Detalhe de maquiagem nos olhos'
            },
            {
                imgSrc: 'https://www.instagram.com/p/Cp26hWCLSsb/?igsh=cGxzMDM5czI3eDR6',
                postUrl: '#',
                altText: 'Noiva com maquiagem completa'
            }
        ];

        mockPhotos.forEach(photo => {
            const link = document.createElement('a');
            link.href = photo.postUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const img = document.createElement('img');
            img.src = photo.imgSrc;
            img.alt = photo.altText;

            link.appendChild(img);
            instagramContainer.appendChild(link);
        });
    }

});