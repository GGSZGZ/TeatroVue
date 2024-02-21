<script setup lang="ts">
import  WeekScheduleItem from '@/components/WeekScheduleItem.vue';
import TicketScheduleItem from '@/components/TicketScheduleItem.vue';
import DirectorBiographyItem from '@/components/DirectorBiographyItem.vue';
import GenreItem from '@/components/GenreItem.vue'
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PopUpItemVue from '@/components/PopUpItem.vue';

const route = useRouter();
const obraId = ref('');

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const idFromRoute = route.currentRoute.value.params.id;
  obraId.value = Array.isArray(idFromRoute) ? idFromRoute[0] : idFromRoute.toString();
});
const showPopup = ref(false);
const togglePopUp = () => {
  showPopup.value = !showPopup.value;
};
const navigateToTickets = () =>{
  route.push({ name: 'ticket', params: { id: obraId.value.toString() } });
}
</script>

<template>
  <main>
    <h3 class="heading">Don Juan Tenorio</h3>
    <WeekScheduleItem />
    <img class="image-obra" :src="'../src/assets/img'+obraId+'.png'"/>
    <section class="sinopsis">
      <div class="sinopsis-child">
        <b class="sinopsis-text" id="sinopsis-1"></b>
      </div>
      <h3 class="sinopsi">Sinopsis</h3>
    </section>
    <!-- horario -->
    <TicketScheduleItem @togglePopUp="togglePopUp"/>

    <DirectorBiographyItem/>

    <GenreItem/>

    <PopUpItemVue v-if="showPopup" @togglePopUp="togglePopUp" @navigateToTickets="navigateToTickets"/>
    
  </main>
</template>

<style scoped>
  main{
    background-color: var(--neutral-colors-white);
    text-align: center;
    position: relative;
    width: 100%;
    height: 3200px;
    font-size: var(--font-size-25xl);
    color: var(--color-goldenrod);
    font-family: var(--font-lobster); 
  }
  .heading {
    margin: 0;
    position: absolute;
    top: 50px;
    left: 51px;
    font-size: inherit;
    line-height: 66px;
    font-weight: 400;
    font-family: inherit;
  }
  .image-obra {
    position: absolute;
    height: 11.64%;
    width: 42.22%;
    top: 6%;
    right: 54.38%;
    bottom: 77.17%;
    left: 3.4%;
    border-radius: var(--br-xl);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .sinopsis {
    position: absolute;
    width: 1358px;
    top: 800px;
    left: 90px;
    height: 533px;
    text-align: justify;
    font-size: var(--font-size-xl);
    color: var(--neutral-colors-white);
    font-family: var(--font-gentium-basic);
  }
  .sinopsis-child {
    position: absolute;
    top: 100px;
    left: 0;
    border-radius: var(--br-24xl);
    background-color: var(--color-maroon);
    width: 1358px;
    height: 433px;
  }
  .sinopsis-text {
    position: relative;
    top: 20px;
    left: 67px;
    line-height: 46px;
    display: inline-block;
    width: 1228px;
    height: 394px;
  }
  .sinopsi {
    position: absolute;
    display: inline-block;
    margin: 0;
    left: 29px;
    font-size: var(--font-size-25xl);
    line-height: 66px;
    font-weight: 400;
    font-family: var(--font-lobster);
    color: var(--color-goldenrod);
    text-align: left;
    width: 264px;
    height: 55.6px;
}
</style>

