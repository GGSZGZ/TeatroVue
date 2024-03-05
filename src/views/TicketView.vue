
<script setup lang="ts">
import { onMounted } from 'vue';
import FormTicketItem from '../components/FormTicketItem.vue'
import ResumeTicketItem from '../components/ResumeTicketItem.vue'
import { useApiStore, pinia } from '../store/api';
import { ref } from 'vue';
const dataLoaded = ref(false);
const play = ref();

   //obtener el id mediante la url
   const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const idObra = urlParts[urlParts.length - 1];

const fetchPlay = async () => {
  try {
    play.value = await useApiStore(pinia).fetchPlay(Number(idObra));
    dataLoaded.value=true;
    
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchPlay();
});


 
  
  const getImgSrc = (index:number) => {
  return `../src/assets/imgsShop${idObra}/img${index}.png`;
};
</script>





<template>
    <main v-if="dataLoaded">
      <div class="title-compra">{{ play.title }}</div>
      
      <!-- formulario -->
      <FormTicketItem/>
      <!-- ticketitem -->
      <ResumeTicketItem/>

      <!-- images obra -->
      <div class="imgs">
      <img class="image-principal" alt="" :src="'../src/assets/img' + idObra + '.png'">

      <img v-for="imgIndex in 4" :key="imgIndex" :class="'img' + imgIndex" alt="" :src="getImgSrc(imgIndex)">
    </div>
    </main>
</template>

<style scoped>
main{
    top: 120px;
    width: 100%;
    height: 2100px;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--color-goldenrod);
    font-family: var(--font-playfair-display);
}
.title-compra {
    top: 30%;
    left: 40%;
    position: absolute;
    font-size: var(--font-size-25xl);
    font-family: var(--font-lobster);
    margin-left: 1%;
}
/* Imagenes */
.imgs {
    position: absolute;
    margin-left: 3.5%;
}
.image-principal {
    position: absolute;
    top: 353px;
    left: 380px;
    border-radius: 52px;
    width: 645px;
    height: 430px;
    object-fit: cover;
}
.img1 {
    position: absolute;
    top: 376px;
    left: 118px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img2 {
    position: absolute;
    top: 599px;
    left: 118px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img3 {
    position: absolute;
    top: 376px;
    left: 1098px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
.img4 {
    position: absolute;
    top: 599px;
    left: 1098px;
    border-radius: var(--br-xl);
    width: 208px;
    height: 138.7px;
    object-fit: cover;
}
</style>