function renderChart(keywordCounts) {
    const ctx = document.getElementById("trendChart").getContext("2d");

    if (window.trendChart) {
        window.trendChart.destroy(); // Remove gráfico anterior
    }

    window.trendChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(keywordCounts),
            datasets: [{
                label: "Ocorrências",
                data: Object.values(keywordCounts),
                backgroundColor: "#1e88e5"
            }]
        },
        options: {
            responsive: true
        }
    });
}
