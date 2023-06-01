var data = {
  labels: ['12:30', '12:31', '12:32', '12:33', '12:34'],
  datasets: [
    {
      label: 'Processos Abertos',
      data: [12, 19, 3, 5, 2],
      //backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
      //borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
      borderWidth: 1, // Largura da borda das barras
    },
  ],
};

// Configurações do gráfico
var options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Criar o gráfico
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar', // Tipo de gráfico (bar: barras, line: linha, pie: pizza, etc.)
  data: data,
  options: options,
});
