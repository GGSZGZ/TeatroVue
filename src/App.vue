<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue';
import Card from './components/Card.vue';
import HomeView from './views/HomeView.vue';




</script>

<template>
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap">
  <header>
  <HeaderItem>
    <template #logo>
      <img alt="" src="./assets/logoIcon.png" class="logo-1-icon"/>
    </template>
    <template #logosearchtexto>
      <img alt="" src="./assets/logoTextIcon.png" class="logosolo-texto-1"/>
    </template>
    <template #home><RouterLink to="/" style="text-decoration: none;">Home</RouterLink></template>
    <template #about><RouterLink to="/about" style="text-decoration: none;">About</RouterLink></template>
    <template #contact>Contact</template>
    <template #logosearch>
      <img alt="" src="./assets/searchIcon.png" class="busqueda-1-icon"/>
    </template>
    <template #hrindex></template>
    
  </HeaderItem>
  </header>

  <body>
    <a href="#/homeview"></a>
  </body>

  <main>
    <!-- enrutado de las paginas este es el visor lo de arriba es el enrutado-->
    <RouterView/>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  line-height: normal;
}
header {
  background-color: #fff;
  width: 100%;
  height: 110px;
}
.logo-1-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 143px;
  height: 110px;
  object-fit: cover;
}
.logosolo-texto-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 143px;
  height: 110px;
  object-fit: cover;
  left: 143px;
  width: 315px;
  height: 109px;
}
.busqueda-1-icon{
  position: absolute;
  top: 39px;
  width: 25px;
  height: 25px;
  object-fit: cover;
  left:92%;
  }
</style>


