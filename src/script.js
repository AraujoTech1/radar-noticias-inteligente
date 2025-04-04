document.getElementById("fetch-news").addEventListener("click", () => {
    const url = document.getElementById("news-url").value;
    if (!url) {
        alert("Por favor, insira uma URL válida.");
        return;
    }

    fetchNews(url);
});

function fetchNews(url) {
    console.log(`Simulando busca de manchetes da URL: ${url}`);

    // Manchetes simuladas
    const headlines = [
        "Novo avanço na inteligência artificial revoluciona mercado",
        "Mudanças climáticas causam impactos severos na economia",
        "Governo anuncia novas medidas para segurança digital",
        "Equipe de cientistas descobre possível cura para doença rara",
        "Tecnologia 5G promete transformar a conectividade global"
    ];

    analyzeKeywords(headlines);
}
