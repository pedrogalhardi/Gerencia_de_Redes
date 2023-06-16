<?php
 
 
  $oid = "1.3.6.1.2.1.1.5.0";


  $nome = snmp2_get($_POST["ip"], $_POST["com"], $oid);

  //retira somente o dado inteiro do retorno da consulta
  $n = explode(" ", $nome);


  //gera a saída que será recebida pelo front-end  
  echo $n[1];

?>
