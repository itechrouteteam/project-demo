<?php
$data=['aple','banana'];
$result = array();
$result['status']="SUCCESS";
$result['data']=$data;
$result['error']="none";
echo json_encode($result);