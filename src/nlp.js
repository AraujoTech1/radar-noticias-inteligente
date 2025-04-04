function analyzeKeywords(headlines) {
    const phraseCounts = {};

    headlines.forEach((headline) => {
        const phrases = extractPhrases(headline.toLowerCase());

        phrases.forEach((phrase) => {
            phraseCounts[phrase] = (phraseCounts[phrase] || 0) + 1;
        });
    });

    displayKeywords(phraseCounts);
}

function extractPhrases(text) {
    // Divide a frase por pontuação para manter apenas trechos significativos
    const parts = text.split(/,|\.|-|;|:/g).map(p => p.trim());

    const validPhrases = parts.filter(part => part.split(" ").length > 2); // Mantém frases com 3+ palavras

    return validPhrases;
}

function displayKeywords(phraseCounts) {
    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";

    const keywordsDiv = document.getElementById("keywords");
    keywordsDiv.innerHTML = "";

    Object.entries(phraseCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5) // Mostra só as 5 frases mais comuns
        .forEach(([phrase, count]) => {
            const p = document.createElement("p");
            p.classList.add("keyword");
            p.textContent = `${phrase} (${count})`;
            keywordsDiv.appendChild(p);
        });

    renderChart(phraseCounts);
}
