<?php

  $hostIP = "10.14.105.35";
  $oidIPIn = ".1.3.6.1.2.1.4.3.0";
  $oidIPOut = ".1.3.6.1.2.1.4.10.0";


  $ipIn = explode(" ",snmpget($hostIP,"public",$oidIPIn))[1];
  $ipOut = explode(" ",snmpget($hostIP,"public",$oidIPOut))[1];

  echo $ipIn ."|". $ipOut;
?>
