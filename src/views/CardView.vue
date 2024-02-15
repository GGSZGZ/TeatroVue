<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const obraId = ref('');

onMounted(() => {
  const route = useRouter();
  const idFromRoute = route.currentRoute.value.params.id;

  
  obraId.value = Array.isArray(idFromRoute) ? idFromRoute[0] : idFromRoute.toString();
});

const getObraDetails = (id: string) => {
  return `Detalles de la obra ${id}`;
};
</script>

<template>
  <div>
    <h1>Detalles de la Obra {{ obraId }}</h1>
    <p>Información de la obra: {{ getObraDetails(obraId) }}</p>
  </div>
</template>

