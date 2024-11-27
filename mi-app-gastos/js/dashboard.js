document.addEventListener('DOMContentLoaded', function() {
    const mostrarGraficaBtn = document.getElementById('mostrar-grafica');
    const graficaContainer = document.getElementById('grafica-container');
    const ctx = document.getElementById('gastosChart').getContext('2d');
    let gastosChart;

    mostrarGraficaBtn.addEventListener('click', function() {
        if (graficaContainer.style.display === 'none') {
            graficaContainer.style.display = 'block';
            mostrarGraficaBtn.textContent = 'Ocultar Gráfica';

            
            const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
            const labels = gastos.map(gasto => gasto.fecha);
            const data = gastos.map(gasto => gasto.total);

            
            if (gastosChart) {
                gastosChart.destroy();
            }
            gastosChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Gastos Mensuales',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } else {
            graficaContainer.style.display = 'none';
            mostrarGraficaBtn.textContent = 'Mostrar Gráfica';
        }
    });
});