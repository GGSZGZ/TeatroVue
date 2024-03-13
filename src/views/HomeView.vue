<script setup lang="ts">

import CardItem from '../components/CardItem.vue';
import CarrouselItemVue from '../components/CarrouselItem.vue';
import CalendarItem from '../components/CalendarItem.vue';
import "../assets/main.css";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useApiStore, pinia } from '../store/api';

const dataLoaded = ref(false);
const plays:any = ref([]);


const fetchPlays = async () => {
  try {
    plays.value = await useApiStore(pinia).fetchPlays();
    dataLoaded.value=true;
    // addClassIdd(plays.value);

  } catch (err) {
    console.error(err);
  }
};
fetchPlays();
  
  //Obras
  const router = useRouter();
  const navigateToObra = (id: number) => {
    router.push({ name: 'card', params: { id: id.toString() } });
  };
  
    
   
     
          
</script>
<template>

<main v-if="dataLoaded">
  <CarrouselItemVue />
  <section class="grip" id="grip">
    <div class="grip-cards">
      <CardItem v-for="(obra, index) in plays.slice(0, 12)"
        :key="obra.id"
        :idObra="obra.id"
        :classNumber="obra.class"
        :classImg="obra.classImg"
        :title="obra.title"
        :descripcion="obra.descriptionPlay"
        :genero="obra.genre"
        :sinopsis="obra.synopsis"
        :asientos="obra.asientos"
        @click="navigateToObra(obra.id)">
      </CardItem>
    </div>
    </section>
    <CalendarItem />
  </main>
  
</template>

<style scoped>
.grip-cards {
  position: relative;
  top:170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 1.8%;
}
.grip {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 600px;
  width: 1220px;
  height: auto;
  margin-left: 9%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-maroon);
  font-family: var(--font-gentium-basic);
}

main{
  background-color: var(--color-maroon);
  width: 100%;
  height: 4000px;
  text-align: center;
  font-size: var(--font-size-25xl);
  color: var(--color-goldenrod);
  font-family: var(--font-lobster);
}

</style>