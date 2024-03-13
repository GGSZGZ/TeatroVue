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
        const response = await fetch("http://ivanggsapi.retocsv.es/play");
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");

      }
    },
    async fetchPlay(idObra: number) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/play/${idObra}`);
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch("http://ivanggsapi.retocsv.es/user");
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");

      }
    },
    async fetchUser(idUser: number) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/user/${idUser}`);
        return await response.json();
      } catch (error) {
        console.log("Error al obtener los datos");
      }
    },
    async fetchPostUser(user:any) {
      try {
        const response = await fetch('http://ivanggsapi.retocsv.es/user', {
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
    async fetchPostTicket(ticket:any) {
      try {
        const response = await fetch('http://ivanggsapi.retocsv.es/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ticket),
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
    async fetchPutUserAll(idUser: number, user: any) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/user/${idUser}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.username,
            surname: user.surname,
            passwd: user.passwd,
            direction: user.direction,
            email: user.email,
            tlf: user.tlf
          })
        });

        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return null;
        }
    
        const responseBody = await response.text();
        if (!responseBody) {
          return null;
        }
    
        return JSON.parse(responseBody);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        return null;
      }
    },
    async fetchPutUser(idUser: number, notes: string) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/user/${idUser}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ notes }),
        });
    
        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return null;
        }
    
        const responseBody = await response.text();
        if (!responseBody) {
          return null;
        }
    
        return JSON.parse(responseBody);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        return null;
      }
    },
    async fetchPutUserTickets(idUser: number,payment : string,direction : string) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/user/${idUser}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            payment,
            direction,
          }),
        });
    
        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return null;
        }
    
        const responseBody = await response.text();
        if (!responseBody) {
          return null;
        }
    
        return JSON.parse(responseBody);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        return null;
      }
    },
    async fetchDeletePlay(idObra: number) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/play/${idObra}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Error al eliminar la obra');
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los datos');
      }
    },
    async fetchPutPlay(idObra: number, title: string, description : string, synopsis : string, director: string, genre: string) {
      try {
        const response = await fetch(`http://ivanggsapi.retocsv.es/play/${idObra}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            descriptionPlay: description,
            synopsis: synopsis,
            director: director,
            genre: genre
          }),
        });
    
        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return null;
        }
    
        const responseBody = await response.text();
        if (!responseBody) {
          return null;
        }
    
        return JSON.parse(responseBody);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        return null;
      }
    },
    async fetchPostPlays(play:any) {
      try {
        const response = await fetch('http://ivanggsapi.retocsv.es/play', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: play,
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