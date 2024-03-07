<script setup lang="ts">

import CardItem from '../components/CardItem.vue';
import CarrouselItemVue from '../components/CarrouselItem.vue';
import CalendarItem from '../components/CalendarItem.vue';
import "../assets/main.css";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useApiStore, pinia } from '../store/api';

const dataLoaded = ref(false);
const plays = ref([]);
const adminH3 = ref<HTMLElement | null>(null);
      adminH3.value = document.querySelector('.sections .admin')! as HTMLElement;


const fetchPlays = async () => {
  try {
    plays.value = await useApiStore(pinia).fetchPlays();
    addClassIdd(plays.value);

  } catch (err) {
    console.error(err);
  }
};
fetchPlays();
  function addClassIdd(obras: any[]){
   // Ruta al archivo JSON
    const filePath: string = "./src/assets/classImg.json";
    // Utiliza la API fetch para cargar el archivo JSON
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar el archivo ${filePath}: ${response.statusText}");
        }
        return response.json();
      })
      .then(obrasClassImg => {
        obras.forEach((obra, index) => {
                if (obra) {
                    // Crea las propiedades 'classImg' e 'idObra' si no existen
                    obra.class = obrasClassImg[index].class;
                    obra.classImg = obrasClassImg[index].classImg;
                }
                
              });
              splitObras(obras);
            })
}
let obras1: any[];
let obras2: any[];

function splitObras(obras: any[]){
   obras1=obras.filter(obra => [7, 10, 11, 12, 8, 9].includes(obra.id));
   obras2=obras.filter(obra => ![7, 10, 11, 12, 8, 9].includes(obra.id));   
   dataLoaded.value=true;
   
}
  //Obras
  const router = useRouter();
  const navigateToObra = (id: number) => {
    router.push({ name: 'card', params: { id: id.toString() } });
  };
  
          if (localStorage.getItem('admin')=='true') {
            adminH3.value!.style.display = 'block';
            
          } else {
            adminH3.value!.style.display = 'none';
           
          }
          // console.log(JSON.parse(localStorage.getItem('user')));
</script>
<template>

<main v-if="dataLoaded">
  <CarrouselItemVue />
  <section class="grip" id="grip">
    <div class="grip-cards1">
      <CardItem v-for="obra in obras2"
        :key="obra.id"
        :idObra="obra.id"
        :classNumber="obra.class"
        :classImg="obra.classImg"
        :title="obra.title"
        :descripcion="obra.descriptionPlay"
        :sinopsis="obra.synopsis"
        :asientos="obra.asientos"
        @click="navigateToObra(obra.id)">
      </CardItem>
    </div>
    <div class="grip-cards">
      <CardItem v-for="obra in obras1"
        :key="obra.id"
        :idObra="obra.id"
        :classNumber="obra.class"
        :classImg="obra.classImg"
        :title="obra.title"
        :descripcion="obra.descriptionPlay"
        :sinopsis="obra.synopsis"
        :asientos="obra.asientos"
        @click="navigateToObra(obra.id)">
      </CardItem>
    </div>
    </section>
  </main>
  <CalendarItem />
</template>

<style scoped>
.grip-cards {
  position: absolute;
  top: 1200px;
  width: 1220px;
  height: 1036px;
  margin-left: 1.8%;
}
.grip-cards1 {
  position: absolute;
  top: 140px;
  left: 0;
  width: 1220px;
  height: 1036px;
  margin-left: 1.8%;
}

.grip {
  position: absolute;
  top: 0;
  left: 0;
  width: 1220px;
  height: 1036px;
  margin-left: 9%;
  top: 784px;
  left: 110px;
  height: 2092px;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-maroon);
  font-family: var(--font-gentium-basic);
}
.grip{
    left: 5px;
    top:685px;
    width: 400px;
  }
  .grip-cards, .grip-cards1{
    width:400px;
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