<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue';
import MapContactItem from '@/components/MapContactItem.vue';
import { onMounted } from 'vue';
    onMounted(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
</script>
<template>
    <main>
        <div class="titulo">Facilítanos tus datos y contactaremos contigo</div>
        <MapContactItem/>
        <ContactItem />
        
    </main>

</template>
<style scoped>
main{
    background-color: var(--neutral-colors-white);
    width: 100%;
    height: 900px;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-gentium-basic);
}

.titulo {
  position: absolute;
  top: 150px;
  left: 69px;
  margin-left: 3%;
  font-size: var(--font-size-25xl);
  font-family: var(--font-lobster);
}
</style>