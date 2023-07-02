<?php
  //$hostIP = "192.168.0.7";
  $oidIPIn = ".1.3.6.1.2.1.6.11.0";
  $oidIPOut = ".1.3.6.1.2.1.4.10.0";

  //$nipIn = snmp2_get($_POST["ip"], $_POST["com"], $oidIPIn);
  //$nipOut = snmp2_get($_POST["ip"], $_POST["com"], $oidIPOut);

  //$ipIn = explode(" ", $nipIn);
  //$ipOut = explode(" ", $nipOut);

  $ipIn = explode(" ",snmp2_get($_POST["ip"], $_POST["com"],$oidIPIn))[1];
  $ipOut = explode(" ",snmp2_get($_POST["ip"], $_POST["com"],$oidIPOut))[1];

  echo $ipIn ."|". $ipOut;
?>
