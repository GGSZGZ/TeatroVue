<script setup lang="ts">
import { ref, onMounted } from 'vue';
  const carruselSlides = [
    {
      text: "No te lo puedes perder, si no pudiste ver 'Espías', ahora tienes de nuevo la oportunidad. Este excelente texto de Ignacio del Moral autor teatral y guionista de 'Tadeo Jones' entre otros."
    },
    {
      text: "Tercer volumen de la colección destinada a ofrecer a los educadores comedias breves para que los niños puedan representar en la escuela."
    },
    {
      text: "Se cuenta la historia de la francesa Melisendra, esposa de don Gaiferos, a quien tenía cautiva el rey Moro Marsilio."
    },
    {
      text: "Una obra dramática de Nadezhda Bojalil sobre el abandono, la explotación y el maltrato infantil y la manera en que la lengua puede proteger a las personas de la violenta realidad."
    }
  ];
      let currentIndex = ref(0);
    const slides = ref<NodeListOf<Element> | null>(null);
      
    const showSlide = (index: number) => {
      slides.value?.forEach((slide) => slide.classList.remove("active"));
      slides.value?.[index]?.classList.add("active");
    };
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.value?.length!;
      showSlide(currentIndex.value);
    };

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + slides.value?.length!) % slides.value?.length!;
      showSlide(currentIndex.value);
    };

    onMounted(() => {
      slides.value = document.querySelectorAll(".carrusel-slide");
      showSlide(currentIndex.value);
      setInterval(nextSlide, 3000);
    });
  </script>

<template>
    <div class="desktop-home">
      <h1 class="heading">Título obra</h1>
      <h1 class="heading1">Añadidos recientemente</h1>
      <h1 class="actualmente">
        <p>LOS MÁS <br>POPULARES</p>
      </h1>
      <div class="carrusel">
        <div v-for="(slide, index) in carruselSlides" :key="index" class="carrusel-slide">
          <img :src="'../src/assets/caimg'+(index+1)+'.png'" />
          <div class="carrusel-text">{{ slide.text }}</div>
          
        </div>
        
        <button @click="prevSlide" id="prevBtn">&lt;</button>
        <button @click="nextSlide" id="nextBtn">></button>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .desktop-home {
  position: absolute;
  width: 100%;
  height: 4100px;
  text-align: center;
  font-size: var(--font-size-25xl);
  color: var(--color-goldenrod);
  font-family: var(--font-lobster);
}
.heading{
    margin: 0;
    position: absolute;
    top: 50px;
    left: 640px;
    font-size: inherit;
    line-height: 46px;
    font-weight: 400;
    font-family: inherit;
  }
  .heading1 {
    margin: 0;
    position: absolute;
    font-size: inherit;
    line-height: 46px;
    font-weight: 400;
    font-family: inherit;
    top: 630px;
    left: 104px;
}
.actualmente {
  margin: 0;
  position: absolute;
  top: 250px;
  left: 200px;
  font-size: inherit;
  line-height: 46px;
  font-weight: 400;
  font-family: inherit;
  color: var(--neutral-colors-white);
  text-align: left;
}
.carrusel {
    position: relative;
    top: 150px;
    left: 600px;
    width: 673px;
    height: 419px;
    cursor: pointer;
    font-size: var(--font-size-xl);
    color: var(--neutral-colors-white);
    font-family: var(--font-gentium-basic);
}
  .carrusel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.carrusel-slide.active {
  opacity: 1;
  visibility: visible;
}
.carrusel-slide img {
  position: absolute;
  height: 96.66%;
  width: 40%;
  top: 0;
  right: 60%;
  bottom: 3.34%;
  object-fit: cover;
}
.carrusel-text {
    position: absolute;
    top: 60px;
    left: 387px;
    line-height: 46px;
    display: inline-block;
    width: 286px;
    height: 276px;
}
#prevBtn{
    left: 100px;
    position: absolute;
    top: 101%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.5em;
    color: var(--color-darkgoldenrod);
    cursor: pointer;
}
#nextBtn {
    left: 140px;
    position: absolute;
    top: 101%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.5em;
    color: var(--color-darkgoldenrod);
    cursor: pointer;
}
  </style>
  