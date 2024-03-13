<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

</script>
<template>



<div class="desktop-comprarealizada">
      <div class="desktop-comprarealizada-child"></div>
      <div class="felicidades-su-compra">
        Felicidades su compra ha sido verificada, disfruta de la función y no
        olvides dejarnos una reseña
      </div>
      <img class="icon-circle-check" alt="" src="../assets/checkIcon.svg">

      <div class="ok-button">
        <RouterLink to="/" style="text-decoration: none; color: var(--neutral-colors-white);">
        <b class="button" id="okBtn" >OK</b>
        </RouterLink>
      </div>
      <!-- <div class="descargar-button">
        <b class="button">Descargar</b>
        <img class="descargar-icon" alt="" src="../assets/downloadIcon.png">
      </div> -->
</div>
</template>

<style scoped>
.desktop-comprarealizada {
    position: relative;
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 900px;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--neutral-colors-white);
    font-family: var(--font-playfair-display);
}
.desktop-comprarealizada-child {
    position: absolute;
    top: 20%;
    left: 15%;
    border-radius: 100px;
    background-color: var(--color-gray);
    width: 70%;
    height: 50%;
}
.felicidades-su-compra {
    position: absolute;
    top: 42%;
    left: 25%;
    width: 50%;
}
.icon-circle-check {
    position: absolute;
    top: 25%;
    left: 47%;
}
.ok-button {
    position: absolute;
    top: 56%;
    left: 48%;
    border-radius: var(--br-11xl);
    background-color: var(--color-maroon);
    padding: var(--padding-lg) var(--padding-5xl);
    cursor: pointer;
    display: flex;
    height: 5%;
    box-sizing: border-box;
    align-items: center;
}
.descargar-button {
    position: absolute;
    top: 55%;
    left: 43%;
    border-radius: var(--br-11xl);
    background-color: var(--color-maroon);
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding-lg) 0 var(--padding-lg) var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    cursor: pointer;
}
.descargar-icon {
    width: 12%;
}
.button:hover {
  color: var(--color-darkgoldenrod);
}
</style>