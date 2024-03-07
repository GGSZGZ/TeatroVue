import { defineStore, createPinia } from 'pinia';

// Creamos la instancia de Pinia
const pinia = createPinia();

// Exportamos la tienda
export const useApiStore = defineStore('teatro', {
  state: () => ({
    loggedInUser: JSON.parse(localStorage.getItem('user')!),
    admin: false,
  }),
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
    async fetchUsers() {
      try {
        const response = await fetch("https://localhost:7121/user");
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");

      }
    },
    async fetchPostUser(user:any) {
      try {
        const response = await fetch('https://localhost:7121/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
    
        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return null;
        }
    
        return await response.json();
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        return null;
      }
    },
    setLoggedInUser(user: any){
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
});

export { pinia };