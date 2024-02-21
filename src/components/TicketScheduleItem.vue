<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean
});
const emits = defineEmits(['togglePopUp']);

function handleClick(){
  emits('togglePopUp');
};

</script>

<template>

<section class="fechas">
        <div class="fechas-child"></div>
        <div class="fechas-item"></div>
        
        <h3 class="fechas1">Fechas</h3>
        
        <b class="disponibles">Horarios</b>
        
        

        <img class="carrito-de-compras-1-icon" alt="" src="../assets/shoppingIcon.png">

        <img class="carrito-de-compras-2-icon" alt="" src="../assets/shoppingIcon.png">

        <img class="carrito-de-compras-3-icon" alt="" src="../assets/shoppingIcon.png">
      </section>
      
      <div class="botonera">
      <button class="button-seleccionar" id="buttonSeleccionar" @click="handleClick()">
        <div class="master-primary-button4">
        </div>
        <div class="seleccionar">Seleccionar</div>
      </button>
      <button class="button-seleccionar1" id="buttonSeleccionar1" @click="handleClick()">
        <div class="master-primary-button4">
        </div>
        <div class="seleccionar">Seleccionar</div>
      </button>
      <button class="button-seleccionar2" id="buttonSeleccionar2" @click="handleClick()">
        <div class="master-primary-button4">
        </div>
        <div class="seleccionar">Seleccionar</div>
      </button>
      </div>
    
      <div class="horarios">
        <p class="horario-titulo" id="hora1">9:30 AM</p>
        <p class="horario-titulo" id="hora2">16:00 PM</p>
        <p class="horario-titulo" id="hora3">18:30 PM</p>
      </div>

</template>


<style scoped>
.fechas {
    position: absolute;
    top: 1500px;
    left: 90px;
    width: 1358px;
    height: 426px;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--color-black);
    font-family: var(--font-playfair-display);
}
.fechas-child {
    position: absolute;
    top: 49px;
    left: 0;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 1358px;
    height: 377px;
}
.fechas-item {
    position: absolute;
    border-radius: var(--br-24xl);
    top: 66px;
    left: 100px;
    background-color: var(--color-whitesmoke-200);
    width: 1160px;
    height: 343px;
}
.fechas1 {
    margin: 0;
    position: absolute;
    top: -40px;
    left: 10px;
    font-size: var(--font-size-25xl);
    line-height: 46px;
    font-weight: 400;
    font-family: var(--font-lobster);
    color: var(--color-goldenrod);
    display: inline-block;
    width: 177px;
    height: 49px;
    mix-blend-mode: normal;
}
.fechas-child {
    position: absolute;
    top: 49px;
    left: 0;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 1358px;
    height: 377px;
}
.fechas-item {
    position: absolute;
    border-radius: var(--br-24xl);
    top: 66px;
    left: 100px;
    background-color: var(--color-whitesmoke-200);
    width: 1160px;
    height: 343px;
}
.disponibles {
    position: absolute;
    top: 90px;
    left: 600px;
    line-height: 34px;
    display: inline-block;
    width: 183px;
    height: 34px;
}
.carrito-de-compras-1-icon {
    position: absolute;
    top: 150px;
    left: 690px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.carrito-de-compras-2-icon {
    position: absolute;
    left: 690px;
    width: 32px;
    height: 32px;
    object-fit: cover;
    top: 225px;
}
.carrito-de-compras-3-icon {
    position: absolute;
    left: 690px;
    width: 32px;
    height: 32px;
    object-fit: cover;
    top: 302px;
}
.botonera {
    position: absolute;
    top: -58px;
    left: -290px;
}
.button-seleccionar {
    cursor: pointer;
    border: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    top: 1701px;
    left: 1200px;
    width: 132px;
    height: 40px;
}
.master-primary-button4 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 47.27px;
    background-color: var(--color-maroon);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-9xl) var(--padding-37xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
}
.seleccionar {
    position: absolute;
    height: 47.5%;
    width: 80%;
    top: 50%;
    left: 15%;
    font-size: var(--font-size-xl);
    line-height: 18px;
    font-family: var(--font-gentium-basic);
    color: var(--neutral-colors-white);
    text-align: left;
    display: inline-block;
}
.button-seleccionar1 {
    cursor: pointer;
    border: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    left: 1200px;
    width: 132px;
    height: 40px;
    top: 1770px;
}
.master-primary-button4 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 47.27px;
    background-color: var(--color-maroon);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-9xl) var(--padding-37xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
}
.seleccionar {
    position: absolute;
    height: 47.5%;
    width: 80%;
    top: 50%;
    left: 15%;
    font-size: var(--font-size-xl);
    line-height: 18px;
    font-family: var(--font-gentium-basic);
    color: var(--neutral-colors-white);
    text-align: left;
    display: inline-block;
}
.button-seleccionar2 {
    cursor: pointer;
    border: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    left: 1200px;
    width: 132px;
    height: 40px;
    top: 1841px;
}
.seleccionar:hover {
  color: var(--color-darkgoldenrod);
}
.horarios {
    position: absolute;
    top: 1610px;
    left: 550px;
    object-fit: cover;
    text-align: center;
    padding: 5px 10px;
    color: var(--color-black);
    font-size: var(--font-size-xl);
    font-family: var(--font-gentium-basic);
    line-height: 2.9;
}
</style>