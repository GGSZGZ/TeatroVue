<script setup lang="ts">
const horario=localStorage.getItem('horario');
const importe=localStorage.getItem('importe')
const cantAsientos=localStorage.getItem('cantidadAsientos')




</script>
<template>
<div class="resumen">
        <div class="resumen1">Resumen</div>
        <div class="resumen-child"></div>
        <div class="resumen-item"></div>
        <div class="resumen-inner"></div>
        
        <b class="horario">Horario</b>
        <b class="hora" id="horarioFin">{{ horario }}</b>
        <table id="resumenAsientos" class="fila-butaca-importe">
          <thead>
            <tr>
              <th>Nº Asientos</th>
              <th class="importeTitle"> Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="cantidadAss">{{ cantAsientos }}</td>
              <td id="importe">{{ importe }} €</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<style scoped>
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
    color: var(--color-gray);
}
td {
    height: 90px;
    width: 689px;
    font-family: var(--font-gentium-basic);
    font-size: var(--font-size-xl);
}


</style>