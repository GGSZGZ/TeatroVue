<script setup lang="ts">

</script>

<template>
    <main>
      <div class="title-compra">Don Juan Tenorio</div>
      <div class="title-form">Rellene los siguientes datos:</div>
      <!-- formulario, rehacer -->
      <form class="form" id="form" action="http://localhost:3000/tickets" method="POST">
        <div class="form-box">
            <div class="marco-form"></div>
            <div class="background-form"></div>
            <img class="container-mark-right" alt="" src="../assets/container.svg">
            <img class="container-mark-left" alt="" src="../assets/container1.svg">

            <input type="text" class="nombre" placeholder="Nombre*" id="Nombre">
            <input type="text" class="correo" placeholder="ejemplos@gmail.com*" id="Correo">
            <input type="text" class="telefono" placeholder="+34 654 158 786*" id="Tlf">
        </div>
        <div class="form-wrapper2">
          <input type="text" class="input7" placeholder="Apellidos*" id="Apellidos">
        </div>
        <div class="form-wrapper3">
          <select class="input7" id="Payment">
            <option value="" disabled="false" selected="false">Método de Pago</option>
            <option value="paypal">Paypal</option>
            <option value="creditCard">Tarjeta de Credito</option>
            <option value="debitCard">Tarjeta de Debito</option>
        
        
          </select><input type="text" class="input8" placeholder="C/Maria Bendito, 25*" id="Calle">
        </div>
        
        <div class="compra-realizada1" id="compraRealizadaContainer">
          <b class="button-cancelar">Cancelar</b>
        </div>
        <div class="compra-realizada2" id="compraRealizadaContainer1">
          <b class="button-comprar">Comprar</b>
        </div>

        <b class="mtodo-de-pago">Método de pago</b>
        
        <img class="tarjeta-de-credito-1-icon" alt="" src="../assets/creditIcon.png">

        <img class="telefono-3-icon" alt="" src="../assets/phoneIcon.png">

        <img class="sobre-2-icon" alt="" src="../assets/mailIcon.png">

        <img class="usuario-2-icon" alt="" src="../assets/userIcon.png">

        <img class="usuario-3-icon" alt="" src="../assets/userIcon.png">

        <img class="edificio-2-icon" alt="" src="../assets/buildingIcon.png">
      </form>
      <!-- fin de formulario -->
      
      <div class="resumen">
        <div class="resumen1">Resumen</div>
        <div class="resumen-child"></div>
        <div class="resumen-item"></div>
        <div class="resumen-inner"></div>
        
        <b class="horario">Horario</b>
        <b class="hora" id="horarioFin">9:30 AM</b>
        <table id="resumenAsientos" class="fila-butaca-importe">
          <thead>
            <tr>
              <th>Nº Asientos</th>
              <th class="importeTitle"> Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="cantidadAss"></td>
              <td id="importe">null€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="imgs">
      <img class="image-principal" alt="" src="./public/mainPicBuy.png">

      <img class="img1" alt="" src="./public/picBuy1.png">

      <img class="img2" alt="" src="./public/picBuy2.png">

      <img class="img3" alt="" src="./public/picBuy3.png">

      <img class="img4" alt="" src="./public/picBuy4.png">
      </div>
    </main>
</template>

<style scoped>
main{
    top: 120px;
    width: 100%;
    height: 2100px;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--color-goldenrod);
    font-family: var(--font-playfair-display);
}
.title-compra {
    top: 30%;
    left: 40%;
    position: absolute;
    font-size: var(--font-size-25xl);
    font-family: var(--font-lobster);
    margin-left: 1%;
}
.title-form {
    font-size: var(--font-size-25xl);
    font-family: var(--font-lobster);
    position: absolute;
    top: 1363px;
    left: 10%;
    line-height: 46px;
    display: inline-block;
    width: 1302px;
    height: 77px;
}
/* Formulario */
.form {
    position: absolute;
    background-color: var(--neutral-colors-white);
    width: 1440px;
    top: 1416px;
    height: 781px;
    overflow: hidden;
    text-align: left;
    font-size: var(--text-single-100-regular-size);
    color: var(--neutral-colors-color-900);
    font-family: var(--text-single-200-regular);
    margin-left: 3.5%;
}
.form-box {
    position: absolute;
    top: 30px;
    left: 68px;
    width: 1305px;
    height: 629px;
}
.marco-form {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--br-6xl);
    background-color: var(--color-maroon);
    width: 1305px;
    height: 629px;
}
.background-form {
    position: absolute;
    top: 24px;
    left: 28px;
    background-color: var(--color-darkgoldenrod);
    width: 1244px;
    height: 573px;
    border-radius: var(--br-6xl);
}
.container-mark-right {
    position: absolute;
    top: 44px;
    left: 1035.5px;
    width: 214.5px;
    height: 274.5px;
}
.container-mark-left {
    position: absolute;
    top: 300px;
    left: 50px;
    width: 205px;
    height: 277.5px;
}
.nombre {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 9.86%;
    right: 69.81%;
    bottom: 81.08%;
    left: 8.74%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.correo {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 23.53%;
    right: 69.81%;
    left: 8.74%;
    bottom: 67.41%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.telefono {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 9.86%;
    right: 69.81%;
    bottom: 81.08%;
    left: 8.74%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
    top: 23.53%;
    bottom: 67.41%;
    top: 37.2%;
    bottom: 53.74%;
}
.form-wrapper2 {
    position: absolute;
    height: 7.3%;
    width: 19.44%;
    top: 11.78%;
    right: 29.31%;
    bottom: 80.92%;
    left: 51.25%;
}
.input7 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.form-wrapper3 {
    position: absolute;
    height: 7.3%;
    width: 19.44%;
    top: 59.92%;
    right: 68.47%;
    bottom: 32.78%;
    left: 12.08%;
}
.input7 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.input8 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 201%;
    bottom: 500%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.compra-realizada1 {
    position: absolute;
    top: 529px;
    left: 781px;
    border-radius: var(--br-11xl);
    background-color: var(--color-goldenrod);
    width: 237px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--neutral-colors-white);
    font-family: var(--font-playfair-display);
}
.button-cancelar {
    position: relative;
    letter-spacing: 0.1em;
    line-height: 26px;
    text-transform: uppercase;
}
.button-cancelar:hover {
  color: var(--color-maroon);
}
.compra-realizada2 {
    position: absolute;
    top: 529px;
    border-radius: var(--br-11xl);
    width: 237px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    cursor: pointer;
    text-align: center;
    font-size: var(--font-size-9xl);
    font-family: var(--font-playfair-display);
    left: 1046px;
    background-color: var(--color-maroon);
    color: var(--color-whitesmoke-100);
}
.button-comprar {
  position: relative;
  letter-spacing: 0.1em;
  line-height: 26px;
  text-transform: uppercase;
}
.button-comprar:hover {
  color: var(--color-darkgoldenrod);
}
.mtodo-de-pago {
    position: absolute;
    top: 492.3px;
    left: 385.3px;
    width: 28.4px;
    height: 14.4px;
    top: 405px;
    left: 177px;
    font-size: var(--headings-h3-size);
    line-height: 34px;
    display: inline-block;
    color: var(--color-gray);
    width: 206px;
    height: 32px;
}
.tarjeta-de-credito-1-icon {
  position: absolute;
  top: 409px;
  left: 377px;
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.telefono-3-icon {
    position: absolute;
    top: 281px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.sobre-2-icon {
    position: absolute;
    top: 281px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
    top: 194px;
}
.usuario-2-icon {
    position: absolute;
    top: 103px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.usuario-3-icon {
    position: absolute;
    top: 103px;
    left: 702px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.edificio-2-icon {
    position: absolute;
    top: 190px;
    left: 702px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
/* Resumen */
.resumen {
    position: absolute;
    top: 969px;
    left: 46px;
    width: 1348px;
    height: 375px;
    text-align: left;
    color: var(--color-gray);
    margin-left: 3.5%;
}
.resumen1 {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 11px;
    font-size: var(--font-size-25xl);
    line-height: 66px;
    font-family: var(--font-lobster);
    color: var(--color-goldenrod);
    text-align: center;
    width: 264px;
    height: 77px;
}
.resumen-child {
    position: absolute;
    top: 132px;
    left: 0;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 1348px;
    height: 208px;
}
.resumen-item {
    position: absolute;
    top: 145px;
    left: 498px;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 834px;
    height: 184px;
    background-color: var(--color-whitesmoke-200);
}
.resumen-inner {
    position: absolute;
    top: 144px;
    left: 16px;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 446px;
    height: 184px;
    background-color: var(--color-whitesmoke-200);
}
.horario {
    position: absolute;
    top: 170px;
    left: 160px;
    line-height: 24px;
    display: inline-block;
    text-align: center;
    width: 156px;
    height: 18px;
    font-family: var(--font-playfair-display);
    font-size: var(--font-size-9xl);
}
.hora {
    position: absolute;
    top: 240px;
    left: 160px;
    display: inline-block;
    text-align: center;
    width: 156px;
    height: 18px;
    font-family: var(--font-gentium-basic);
    font-size: var(--font-size-xl);
}
.fila-butaca-importe {
    top: 165px;
    left: 570px;
    line-height: 34px;
    width: 689px;
    height: 39px;
    text-align: center;
    position: absolute;
    display: inline-block;
}
th {
    width: 50%;
    font-family: var(--font-playfair-display);
    font-size: var(--font-size-9xl);
}
td {
    height: 90px;
    width: 689px;
    font-family: var(--font-gentium-basic);
    font-size: var(--font-size-xl);
}
/* Imagenes */
.imgs {
    position: absolute;
    margin-left: 3.5%;
}
.image-principal {
    position: absolute;
    top: 353px;
    left: 380px;
    border-radius: 52px;
    width: 645px;
    height: 430px;
    object-fit: cover;
}
.img1 {
    position: absolute;
    top: 376px;
    left: 118px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img2 {
    position: absolute;
    top: 599px;
    left: 118px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img3 {
    position: absolute;
    top: 376px;
    left: 1098px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img4 {
    position: absolute;
    top: 599px;
    left: 1098px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
</style>