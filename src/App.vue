<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';
import HomeView from './views/HomeView.vue';
//import css
import "./assets/main.css";

</script>

<template>
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster:wght@400&display=swap"/>
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
   
  <main>
    <div class="desktop-home">
      <RouterView />
    </div>
  </main>
  <footer>
    <FooterItem>
      <template #logo>
        <img alt="" src="./assets/logoIcon.png" class="logo-1-icon"/>
      </template>
      <template #logosearchtexto>
        <img alt="" src="./assets/logoTextIcon.png" class="logosolo-texto-1"/>
      </template>
      <template #homeIcon><RouterLink to="/" style="text-decoration: none;"><img alt="" src="./assets/homeIcon.png" class="icon"></RouterLink></template>
      <template #home><RouterLink to="/" style="text-decoration: none;">Home</RouterLink></template>
      <template #aboutIcon><RouterLink to="/about" style="text-decoration: none"><img alt="" src="./assets/infoIcon.png" class="icon"></RouterLink></template>
      <template #about><RouterLink to="/about" style="text-decoration: none;">About</RouterLink></template>
      <template #contactIcon><img alt="" src="./assets/phoneIcon.png" style="text-decoration: none;" class="icon"></template>
      <template #contact>Contact</template>
      <template #logosearch>
        <img alt="" src="./assets/searchIcon.png" class="busqueda-1-icon"/>
      </template>
      <template #hrindex></template>
      <!--Redes Sociales-->
      <template #facebook><img alt="" src="./assets/facebook.svg" ></template>
      <template #instagram><img alt="" src="./assets/instagram.svg"></template>
      <template #twitter><img alt="" src="./assets/twitter.svg"></template>
    </FooterItem>
  </footer>
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
footer{
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
.icon{
  width:40px;
  height: 39px;
}

</style>