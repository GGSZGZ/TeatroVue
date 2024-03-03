<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';
//import css
import "./assets/main.css";

</script>

<template>
  
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster:wght@400&display=swap">
    <link rel="stylesheet" href="ht tps://fonts.googleapis.com/css2?family=Gentium+Basic:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@700&display=swap">
  <header>
  <HeaderItem>
    <template #logosearchtexto>
      <img alt="" src="./assets/logoTextIcon.png" class="logosolo-texto-1"/>
    </template>
    <template #home><RouterLink to="/" style="text-decoration: none; color: var(--neutral-colors-headings-black);">Home</RouterLink></template>
    <template #about><RouterLink to="/about" style="text-decoration: none; color: var(--neutral-colors-headings-black);">About</RouterLink></template>
    <template #contact><RouterLink to="/contact" style="text-decoration: none; color: var(--neutral-colors-headings-black);">Contact</RouterLink></template>
    <template #iconregister>
      <RouterLink to="/login&register" style="text-decoration: none;"><img alt="" src="./assets/userIcon.png" class="register-icon"/></RouterLink>
    </template>
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
      <template #logosearchtexto>
        <img alt="" src="./assets/logoTextIcon.png" class="logosolo-texto-1"/>
      </template>
      <template #homeIcon><RouterLink to="/" style="text-decoration: none;"><img alt="" src="./assets/homeIcon.png" class="icon"></RouterLink></template>
      <template #home><RouterLink to="/" style="text-decoration: none; color: var(--neutral-colors-headings-black);">Home</RouterLink></template>
      <template #aboutIcon><RouterLink to="/about" style="text-decoration: none"><img alt="" src="./assets/infoIcon.png" class="icon"></RouterLink></template>
      <template #about><RouterLink to="/about" style="text-decoration: none; color: var(--neutral-colors-headings-black);">About</RouterLink></template>
      <template #contactIcon><RouterLink to="/contact" style="text-decoration: none;"><img alt="" src="./assets/phoneIcon.png" style="text-decoration: none;" class="icon"></RouterLink></template>
      <template #contact><RouterLink to="/contact" style="text-decoration: none; color: var(--neutral-colors-headings-black);">Contact</RouterLink></template>
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
  background-color: --neutral-colors-white;
  width: 100%;
  height: 110px;
}
footer{
  background-color: --neutral-colors-white;
  width: 100%;
  height: 110px;
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
.register-icon{
  position: absolute;
  top: 39px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  left: 87%;
}
.icon{
  width:40px;
  height: 39px;
}

</style>