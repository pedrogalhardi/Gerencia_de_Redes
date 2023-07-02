<?php
  
  //$hostIP = "192.168.0.7";
  $oid = "1.3.6.1.2.1.25.1.6.0";

  //$processos = explode(" ",snmpget($hostIP,"public",$oid))[1];

  $nProcessos = snmp2_get($_POST["ip"], $_POST["com"], $oid);

  //retira somente o dado inteiro do retorno da consulta
  $processos = explode(" ", $nProcessos);


  //gera a saída que será recebida pelo front-end  
  echo $processos[1];

?>
