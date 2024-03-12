<script setup lang="ts">
import "../assets/main.css";
    const props=defineProps<{
        idObra?:number
        classNumber?:number
        classImg?:number
        title?:string
        descripcion?:string
        sinopsis?:string
        asientos?:string[]
    }>()
</script>
<template>
    
        
            <div class="card" :id="'card-' + idObra">
                <h3 class="card-heading" :id="'title-'+idObra">{{title}}</h3>
                <div class="paragraph" :id="'description-'+idObra">{{descripcion}}
                </div>
                <div class="link">
                  <div class="master-link">
                    <b class="learn-more">Más</b>
                     <img src="../assets/rightArrowIcon.svg">
                  </div>
            </div>
            <img class="image" alt="" :id="'img-'+idObra" :src="'./src/assets/img'+idObra+'.png'"/>
            </div>
        
    
</template>
<style scoped>
  .card-heading {
  position: absolute;
  left: 24px;
  display: inline-block;
  margin: 0;
  top: 268px;
  font-size: var(--font-size-9xl);
  line-height: 34px;
  font-weight: 700;
  font-family: var(--font-playfair-display);
  width: 324px;
}
.card {
  position: relative;
  top: 0;
  left: 0;
  border-radius: var(--br-5xl);
  background-color: var(--neutral-colors-white);
  border: 1px solid var(--neutral-colors-color-600);
  box-sizing: border-box;
  width: 391.8px;
  height: 506px;
  display: flex; /* Añadido */
  flex-direction: column; /* Añadido */
  justify-content: center; /* Añadido */
  align-items: center; /* Añadido */
  margin-bottom: 20px;
}

.card:hover{
  transform: scale(1.1);
  cursor: pointer;
}

.paragraph {
  position: absolute;
  left: 24px;
  display: inline-block;
  top: 314px;
  line-height: 30px;
  color: var(--color-gray);
  width: 340.6px;
}
.link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 436px;
  left: 24px;
  align-items: flex-start;
  text-align: center;
  color: var(--color-darkgoldenrod);
}
.master-link {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--gap-7xs);
}
.learn-more {
  position: relative;
  line-height: 90px;
}
.image {
  position: relative;
  border-radius: var(--br-xl);
  width: auto;
  height: 200px;
  object-fit: cover;
  margin-bottom: 240px; /* Añadido espacio entre la imagen y el texto */
  max-width: 350px;
}

</style>

