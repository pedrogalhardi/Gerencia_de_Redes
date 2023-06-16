const labelIPInX = [];
const dataIPInY = [];
var timer;

//Adicionando eventos nos botões
document.getElementById('btnIniciar').addEventListener('click', function () {
  console.log('Iniciando o monitoramento!!');
  snmpGet();
});

document
  .getElementById('btnInterromper')
  .addEventListener('click', function () {
    console.log('Parando o monitoramento!!');
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
    url: 'snmpGet3.php',
    method: 'POST',
    data: { ip: IP, com: comun },
    success: function (response) {
      const Desc = document.querySelector('#desc');
      Desc.innerHTML = `${response}`;
      console.log(response);
    },
  });
}
