<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue';
// import FooterItem from './components/FooterItem.vue';
import CardItem from './components/CardItem.vue';





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
      <img alt="" src="./assets/searchIcon.svg" class="busqueda-1-icon"/>
    </template>
    <template #hrindex></template>
    
  </HeaderItem>
  </header>

  <body>
  </body>

  <main>
    <!-- enrutado de las paginas este es el visor lo de arriba es el enrutado-->
    <RouterView/>
  </main>
<!-- <FooterItem> -->
  <!-- <hr class="footer-line-hr"/>
      <footer class="footer">
        
          <div class="nav-list">
            <div class="link12">
              <div class="master-link">
                <img class="home-1-icon" alt="" src="./public/homeIcon.png" />

                <h3 class="home">Home</h3>
                
              </div>
            </div>
            <div class="link13" id="linkContainer13">
              <div class="master-link">
                <img
                  class="informacion-1-icon"
                  alt=""
                  src="./public/infoIcon.png"
                />

                <h3 class="home">About</h3>
                
              </div>
            </div>
            <div class="link13" id="linkContainer14">
              <div class="master-link">
                <img
                  class="telefono-1-icon"
                  alt=""
                  src="./public/phoneIcon.png"
                />

                <h3 class="home">Contact</h3>
                
              </div>
            </div>
          </div>
          <div class="footer-botom">
            <div class="copyright">
              Copyright © 2023 BRIX Templates | All Rights Reserved
            </div>
            <div class="divider"></div>
          </div>
        
        <div class="logo1">
          <img class="logo-1-icon" alt="" src="./public/logoIcon.png" />

          <img
            class="logosolo-texto-2"
            alt=""
            src="./public/logoTextIcon.png"
          />
        </div>
        <div class="social-media">
          <div class="social-media-icon-square" id="socialMediaIconSquare">
            <div class="social-media-icon"></div>
            <img class="facebook-icon" alt="" src="./public/facebook.svg" />
          </div>
          <div class="social-media-container" id="socialMediaContainer">
            <div class="social-media-icon-squareinsta">
              <div class="social-media-icon"></div>
              <img class="instagram-icon" alt="" src="./public/instagram.svg" />
            </div>
          </div>
          <div class="social-media-icon-square1" id="socialMediaIconSquare1">
            <div class="social-media-icon"></div>
            <img class="twitter-icon" alt="" src="./public/twitter.svg" />
          </div>
        </div>
      </footer> -->
<!-- </FooterItem> -->
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
  top: 45px;
  width: 70px;
  height: 30px;
  object-fit: cover;
  left:92%;
  }
  /* .footer-line-hr {
  position: absolute;
  bottom: -3236px;
  width: 100%;
  border-color: #000;
}
.footer{
    top: 3751px;
  }

  .nav-list {
  position: absolute;
  top: calc(50% - 63.6px);
  right: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.link12 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.master-link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.home-1-icon {
  position: relative;
  width: 33.1px;
  height: 32px;
  object-fit: cover;
}
.home {
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
}
.link13 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
}
.informacion-1-icon {
  position: relative;
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.telefono-1-icon {
  position: relative;
  width: 32px;
  height: 30.6px;
  object-fit: cover;
}
.footer-botom {
  position: absolute;
  top: 190px;
  margin-left: 10%;
  width: 1220px;
  height: 50px;
  font-size: 18px;
  font-family: "DM Sans";
}
.copyright{
    top:-40px;
    left: 0px;
    width:350px;
  }
  .divider{
    top:-50px;
    width: 350px;
    left:0px;
  }
  .logo1{
    transform: scale(0.5);
    margin-left: -9%;
    top: 0px;
    position: absolute;
    top: 57px;
    margin-left: 5%;
    width: 458px;
    height: 110px;
  }
  .logosolo-texto-2{
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
.social-media {
  position: relative;
  top: 82px;
  margin-left: 80%;
  width: 100%;
  height: 36px;
  transform: scale(0.8);
  top:95px;
  margin-left: 20%;
}
.social-media-icon-square {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.social-media-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  background-color: #8f1515;
}
.facebook-icon {
  position: absolute;
  height: 50%;
  width: 27.22%;
  top: 25%;
  right: 36.39%;
  bottom: 25%;
  left: 36.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.facebook-icon:hover {
  background-color: #cc9936;
}
.social-media-icon-squareinsta {
  position: relative;
  width: 36px;
  height: 36px;
}
.instagram-icon {
  position: relative;
  width: 18px;
  height: 18px;
}
.instagram-icon:hover {
  background-color: #cc9936;
}
.social-media-icon-square1 {
  position: absolute;
  top: 0;
  left: 151px;
  width: 36px;
  height: 36px;
  cursor: pointer;
}
.twitter-icon {
  position: absolute;
  height: 40.56%;
  width: 50%;
  top: 29.72%;
  right: 25%;
  bottom: 29.72%;
  left: 25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.twitter-icon:hover {
  background-color: #cc9936;
} */
</style>


