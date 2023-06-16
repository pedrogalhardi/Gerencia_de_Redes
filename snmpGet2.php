<?php
  
 
  $oid = "1.3.6.1.2.1.1.3.0";


  $time = snmp2_get($_POST["ip"], $_POST["com"], $oid);

  //retira somente o dado inteiro do retorno da consulta
  $tm = explode(" ", $time);
  

  //gera a saída que será recebida pelo front-end  
  echo $tm[1];

?>
