const ctx = document.getElementById('myChart');
const labelsIPIn = [];
const dataIPIn = [];
const dataIPOut = [];

var hora = new Date();
var rangeIn = 0;
var rangeOut = 0;
var timer;

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelsIPIn,
    datasets: [
      {
        label: 'Quantidade de datagramas IP recebida',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataIPIn,
        borderWidth: 2,
      },
      {
        label: 'Quantidade de datagramas IP enviados',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: dataIPOut,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
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
  console.log('Iniciando o monitoramento!!');

  dataIPIn.length = 0;
  dataIPOut.length = 0;
  labelsIPIn.length = 0;
  timer = setInterval(snmpGet, 2000);
});

//botão interromper
document
  .getElementById('btnInterromper')
  .addEventListener('click', function () {
    console.log('Interromper o monitoramento!!!!');
    clearInterval(timer);
  });

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function snmpGet() {
  const IP = document.querySelector('#ip').value;
  const comun = document.querySelector('#com').value;

  $.ajax({
    url: 'snmpGet.php',
    method: 'POST',
    data: { ip: IP, com: comun },
    success: function (response) {
      /*if (rangeIn === 0) {
        rangeIn = response;
      } else {
        rangeIn = response - rangeIn;
        dataIPIn.push(rangeIn);
        myChart.update();
      }
      rangeIn = response;
      if (rangeOut === 0) {
        rangeOut = response;
      } else {
        rangeOut = response - rangeOut;
        dataIPOut.push(rangeOut);
        myChart.update();
      }
      rangeOut = response;
*/
      labelsIPIn.push(hora.toLocaleString());
      dataIPIn.push(response);
      dataIPOut.push(parseInt(response) - 150);
      myChart.update();
    },
  });
}
