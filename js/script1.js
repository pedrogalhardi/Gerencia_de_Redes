const ctx = document.getElementById('myChart');
const labelsIPIn = [];
const dataIPIn = [];
const dataIPOut = [];

var timer;

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsIPIn,
    datasets: [
      {
        label: 'Quantidade de datagramas IP recebida',
        data: dataIPIn,
        borderWidth: 2,
      },
      {
        label: 'Quantidade de datagramas IP enviados',
        data: dataIPOut,
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Hora',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade de datagramas recebidos/enviados',
        },
        beginAtZero: false,
      },
    },
  },
});

//Evento dos botões

//botão iniciar
document.getElementById('btnIniciar').addEventListener('click', function () {
  console.log('Iniciando o monitoramentoa sdfasdfsdafsadfasdfsda!!!!');

  timer = setInterval(snmpGet, 3000);
});

//botão interromper
document
  .getElementById('btnInterromper')
  .addEventListener('click', function () {
    console.log('Interromper o monitoramento!!!!');
    clearInterval(timer);
  });

function snmpGet() {
  $.ajax({
    url: 'snmpGet.php',
    method: 'POST',
    data: '',
    success: function (response) {
      //console.log(response);
      dataIPIn.push(response);
      dataIPOut.push(parseInt(response) - 150);

      var hora = new Date();
      //console.log(hora.toLocaleTimeString());
      labelsIPIn.push(hora.toLocaleTimeString());

      myChart.update();
      // console.log(labelsIPIn);
      // console.log(dataIPIn);
    },
  });
}
