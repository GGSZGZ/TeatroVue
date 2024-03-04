import { defineStore, createPinia } from 'pinia';

// Creamos la instancia de Pinia
const pinia = createPinia();

// Exportamos la tienda
export const useApiStore = defineStore('plays', {
  actions: {
    async fetchPlays() {
      try {
        const response = await fetch("https://localhost:7121/play");
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");

      }
    },

    async fetchPlay(idObra: number) {
      try {
        const response = await fetch(`https://localhost:7121/play/${idObra}`);
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");
      }
    },
  },
});

export { pinia };