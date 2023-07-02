<?php
  
  //$hostIP = "192.168.0.7";
  $oid = "1.3.6.1.2.1.1.3.0";

  $time = snmp2_get($_POST["ip"], $_POST["com"], $oid);

  //$tm = explode(" ",snmpget($hostIP,"public",$oid))[1];

  //retira somente o dado inteiro do retorno da consulta
  $tm = explode(" ", $time);
  

  //gera a saída que será recebida pelo front-end  
  echo $tm[1];

?>
