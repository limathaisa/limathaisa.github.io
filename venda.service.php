<?php
include("../../model/venda.class.php");
function pegaVendaPeloId($id) {
return Venda::pegaPorId($id);
}
?>