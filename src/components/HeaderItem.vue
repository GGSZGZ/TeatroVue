<script setup lang="ts">

//import css
import "../assets/main.css";

</script>
<template>
<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Playfair Display:wght@400;600;700&display=swap"
    />
  <div class="logo">
      <slot name="logo"></slot>
      <slot name="logosearchtexto"></slot>
          
  </div>

    <nav class="sections">
        <h3 class="home">
          <slot name="home"></slot>
        </h3>
        
        <h3 class="about">
        <slot name="about"></slot>
        </h3>
        <h3 class="about">
        <slot name="contact"></slot>
    </h3>
  </nav>
    <slot name="hrindex">
        <hr class="header-line-hr">
    </slot>
    
    <slot name="logosearch"></slot>


</template>

<style scoped>

.logo{
    position: absolute;
    top: 0;
    left: 0;
    width: 458px;
    height: 80px;
}
.sections{
    transform: scale(0.7);
    right: 20px;
    margin: 0;
    position: absolute;
    top: 46px;
    right: 196px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 33px;
    text-align: center;
    font-size: 28px;
    color: #5d5a88;
    font-family: 'Playfair Display';
  }

.header-line-hr {
  position: absolute;
  top: 110px;
  width: 100%;
  border-color: #000;
}
.home {
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
}
.about {
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
}

 

</style>