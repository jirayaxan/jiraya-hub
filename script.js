async function carregarNoticias() {
    const rssUrl = "https://www.flowgames.com.br/feed"; // Substitua pelo RSS oficial
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const lista = document.getElementById('news-list');
        lista.innerHTML = ""; // Limpa conteúdo

        data.items.slice(0, 5).forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `• <a href="${item.link}" target="_blank">${item.title}</a>`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error("Erro ao carregar RSS:", error);
        document.getElementById('news-list').innerHTML = "<li>Não foi possível carregar as notícias.</li>";
    }
}

// Chama a função ao carregar a página
carregarNoticias();
