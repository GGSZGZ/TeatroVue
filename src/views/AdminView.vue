<script setup lang="ts">
import { ref} from 'vue';
import TableItem from '@/components/TableItem.vue';
import { useApiStore, pinia } from '../store/api';

const obras:any=ref([]);
const nuevaObra=ref({
      title : '',
      descriptionPlay: '',
      synopsis: '',
      director: '',
      genre: ''
     });

    function anyadirObra() {
      const {title,descriptionPlay,synopsis,director,genre}=nuevaObra.value;
      
      
      if(!title || !descriptionPlay || !synopsis || !director || !genre){
        alert('Faltan campos por completar')
      }else{
        obras.value.push({
          title,
          descriptionPlay,
          synopsis,
          director,
          genre
        });
        useApiStore(pinia).fetchPostPlays(JSON.stringify(obras.value[0]));
      }
     
      
     }
     
     //TextField Título
     const nameRules = ref([
      (value:string) => !!value || 'El campo no puede estar vacío',
    ]);
  

</script>
<template>
    <v-form class="custom-form">
      <v-container>
        <v-row>
          <v-col
            cols="14"
            md="2"
          >
          <v-text-field clearable
                v-model="nuevaObra.title"
                :rules="nameRules"
                label="Title"
                placeholder="Y llegó la noche"
                required
              ></v-text-field>
          </v-col>

          <v-col
            cols="14"
            md="4"
          >
          <v-textarea clearable
                v-model="nuevaObra.descriptionPlay"
                :rules="nameRules"
                label="Description"
                placeholder="Una obra apasionante llena de altibajos y de sentimiento florecidos"
                required
                rows="1"
                auto-grow
              ></v-textarea>
          </v-col>

          <v-col
            cols="14"
            md="4"
          >
          <v-textarea clearable
          v-model="nuevaObra.synopsis"
                :rules="nameRules"
                label="Sinopsis"
                placeholder="En el bullicioso mundo teatral del siglo XIX, un enmascarado misterioso acecha entre bambalinas, desentrañando secretos..."
                required
                rows="1"
                auto-grow
              ></v-textarea>
          </v-col>

          <v-col
            cols="14"
            md="2"
          >

          <v-textarea clearable
          v-model="nuevaObra.director"
                :rules="nameRules"
                label="Director"
                placeholder="Juanjo Pastor es un joven actor"
                required
                rows="1"
                auto-grow
              ></v-textarea>
          </v-col>

          <v-col
            cols="14"
            md="2"
          >
          <v-text-field clearable
          v-model="nuevaObra.genre"
                :rules="nameRules"
                label="Género"
                placeholder="Comedia"
                required
              ></v-text-field>
          </v-col>

          <v-col
            cols="14"
            md="2"
          >

          
            <button @click="anyadirObra">Añadir Obra</button>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <TableItem :obras="obras"/>
</template>
<style scoped>

    


    button{
        width: 100%; 
        padding: 10px; 
        margin: 5px; 
        background-color: var(--color-maroon); 
        color: #ffffff; 
        cursor: pointer; 
        font-size: 16px; 
        border-radius: 5px; 
        transition: background-color 0.3s, color 0.3s;
    }
    button:hover{
        color: var( --color-darkgoldenrod);
    }
    .custom-form{
      position: relative;
      width: 100%;
      right: 30px;
    }
    .v-container{
      display: flex;
      margin-left: 40px;
    }
    .v-row{
      flex-wrap: nowrap;
    }
</style>