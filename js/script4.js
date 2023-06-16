const labelIPInX = [];
const dataIPInY = [];
var timer;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelIPInX,
    datasets: [
      {
        label: 'Número de Processos',
        data: dataIPInY,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
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
          text: 'Data/Hora',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Qtde de processos',
        },
      },
    },
  },
});

//Adicionando eventos nos botões
document.getElementById('btnIniciar').addEventListener('click', function () {
  console.log('Iniciando o monitoramento!!');
  timer = setInterval(snmpGet, 5000);
});

document
  .getElementById('btnInterromper')
  .addEventListener('click', function () {
    console.log('Parando o monitoramento!!');
    clearInterval(timer);
  });

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Requisição SNMP
function snmpGet() {
  const IP = document.querySelector('#ip').value;
  const comun = document.querySelector('#com').value;

  $.ajax({
    url: 'snmpGet4.php',
    method: 'POST',
    data: { ip: IP, com: comun },
    success: function (response) {
      console.log(response);
      var dateTime = new Date();
      labelIPInX.push(dateTime.toLocaleTimeString());
      dataIPInY.push(parseInt(response));
      myChart.update();
    },
  });
}
