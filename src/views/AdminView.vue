<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
const props = defineProps(['obras']);
import TableItem from '@/components/TableItem.vue';

// onMounted(() => {
//       modificar, eliminar y añadir obras
      
//     });
    function anyadirObra() {
       
       console.log(`Añadir obra con ID`);
     }
     const valid = ref('false');
     //TextField Título
     const nameRules = ref([
      (value:string) => !!value || 'El campo no puede estar vacío', // Debe tener al menos un carácter
    ]);
    const imageUrl=ref('');

    const isValidImageUrl = computed(() => {
      // Expresión regular para validar URL de imagen
      const imageUrlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
      return imageUrlRegex.test(imageUrl.value);
    });
    
    
   
</script>
<template>
    <v-form class="custom-form" v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="24"
            md="2"
          >
          <v-text-field clearable
                :rules="nameRules"
                label="Title"
                placeholder="Y llegó la noche"
                required
              ></v-text-field>
          </v-col>

          <v-col
            cols="24"
            md="4"
          >
          <v-textarea clearable
                :rules="nameRules"
                label="Description"
                placeholder="Una obra apasionante llena de altibajos y de sentimiento florecidos"
                required
                rows="3"
                no-resize
              ></v-textarea>
          </v-col>

          <v-col
            cols="24"
            md="4"
          >
          <v-textarea clearable
                label="Sinopsis"
                hide-details
                placeholder="En el bullicioso mundo teatral del siglo XIX, un enmascarado misterioso acecha entre bambalinas, desentrañando secretos..."
                required
                rows="3"
                no-resize
              ></v-textarea>
          </v-col>

          <v-col
            cols="24"
            md="2"
          >
            <v-text-field v-model="imageUrl" label="Image URL"></v-text-field>
            <v-img v-if="isValidImageUrl" :src="imageUrl" width="200" height="200"></v-img>
          </v-col>

          <v-col
            cols="24"
            md="12"
          >
            <button @click="anyadirObra()">Añadir Obra</button>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

  
  
  
  
  

    
    <TableItem :obras="obras"/>
</template>
<style scoped>
    button{
        width: 8%; 
        padding: 10px; 
        margin: 5px; 
        margin-left: 91.9%; 
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
      right: 160px;
    }
</style>