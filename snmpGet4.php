<?php
  
  
  $oid = "1.3.6.1.2.1.25.1.6.0";


  $nProcessos = snmp2_get($_POST["ip"], $_POST["com"], $oid);

  //retira somente o dado inteiro do retorno da consulta
  $processos = explode(" ", $nProcessos);


  //gera a saída que será recebida pelo front-end  
  echo $processos[1];

?>
