// template.js
const template = {
    menu: `
        <nav class="top-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#noticias">Notícias</a></li>
                <li><a href="#eventos">Eventos</a></li>
                <li><a href="guias.html">Guias</a></li>
                <li><a href="#comunidade">Comunidade</a></li>
                <li><a href="#suporte">Suporte</a></li>
            </ul>
        </nav>
    `,
    header: `
        <header>
			
            <h1></h1>
        </header>
    `,
    footer: `
        <footer>
            <p>© 2025 WYD Mobile Brasil. Todos os direitos reservados.</p>
        </footer>
    `
};

function loadTemplate() {
    document.getElementById('menu-container').innerHTML = template.menu;
    document.getElementById('header-container').innerHTML = template.header;
    document.getElementById('footer-container').innerHTML = template.footer;
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', loadTemplate);