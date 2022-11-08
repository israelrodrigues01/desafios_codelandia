const content = document.getElementById('projetos-cotent');

let card = [
    {
        title: 'Blog',
        image: 'Blog',
        technology: "HTML e CSS.",
        desc: 'Desafio 001',
        demo: "assets/Desafio 001/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20001',
    },
    {
        title: 'Jordan',
        image: 'JordanShoes',
        technology: "HTML e CSS.",
        desc: 'Desafio 002',
        demo: "assets/Desafio 002/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20002',
    },
    {
        title: 'Tela de Login',
        image: 'Login',
        technology: "HTML e CSS.",
        desc: 'Desafio 003',
        demo: "assets/Desafio 003/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20003',
    },
    {
        title: 'Studio Ghibli',
        image: 'Studio Ghibli',
        technology: "HTML e CSS.",
        desc: 'Desafio 005',
        demo: "assets/Desafio 005/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20005',
    },
    {
        title: 'Page Loki',
        image: 'loki-page',
        technology: "HTML e CSS.",
        desc: 'Desafio 006',
        demo: "assets/Desafio 006/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20006',
    },
    {
        title: 'Valorant',
        image: 'Valorant',
        technology: "HTML e CSS.",
        desc: 'Desafio 007',
        demo: "assets/Desafio 007/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20007',
    },
    {
        title: 'CodeMoji',
        image: 'CodeMoji',
        technology: "HTML e SASS.",
        desc: 'Desafio 009',
        demo: "assets/Desafio 009/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20009',
    },
    {
        title: 'Naped',
        image: 'Naped',
        technology: "HTML e CSS.",
        desc: 'Desafio 0010',
        demo: "assets/Desafio 0010/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20010',
    },
    {
        title: 'Jogo da memória',
        image: 'Jogo da memória',
        technology: "HTML, SASS, VITE e REACT.",
        desc: 'Desafio 0011',
        demo: "assets/Desafio 0011/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20011',
    },
    {
        title: 'La Pizza',
        image: 'La Pizza',
        technology: "HTML, SASS, VITE e REACT.",
        desc: 'Desafio 0012',
        demo: "assets/Desafio 0012/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20012',
    },
    {
        title: 'Feliz Natal',
        image: 'Feliz Natal',
        technology: "HTML, SASS, VITE e REACT.",
        desc: 'Desafio 0016',
        demo: "assets/Desafio 0016/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20016',
    },
    {
        title: 'Rachi',
        image: 'Rachi',
        technology: "HTML, CSS BOOTSTRAP.",
        desc: 'Desafio 0019',
        demo: "assets/Desafio 0019/index.html",
        repository: 'https://github.com/israelrodrigues01/desafios_codelandia/tree/main/Desafio%20019',
    },
    {
        title: 'Home page pepsi',
        image: 'pepsi',
        technology: "HTML, CSS e JS.",
        desc: 'Home Page',
        demo: "https://israelrodrigues01.github.io/homepage-pespi/",
        repository: 'https://github.com/israelrodrigues01/homepage-pespi',
    },
    {
        title: 'To-do List',
        image: 'to-do_list',
        technology: "HTML, CSS e JS.",
        desc: 'Home Page',
        demo: "https://israelrodrigues01.github.io/homepage-pespi/",
        repository: 'https://github.com/israelrodrigues01/homepage-pespi',
    }
];

card.map((item) => {
    let html = `
    <div class="box">
        <div class="box-img"><img src="public/img/${item.image}.png" alt=""></div>
        <div class="box-text">
            <h3>${item.title}</h3>
            <p>Tecnologias: ${item.technology}</p>
            <p>${item.desc}</p>
        </div>
        <div class="box-btn flex">
            <a href="${item.demo}" target="_blank" class="btn" style="--bg: var(--green); --color: #171717;">Demo</a>
            <a href="${item.repository}" target="_blank" class="btn" style="--bg: var(--gray-400); --color: #F9F9F9;">GitHub</a>
        </div>
    </div>    
    `;

    content.insertAdjacentHTML("beforeend", html);
})