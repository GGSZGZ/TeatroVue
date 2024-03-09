<script setup lang="ts">
import { ref, onMounted, defineEmits, defineProps } from 'vue';
import { useApiStore, pinia } from '../store/api';
const props = defineProps(['obras']);
let obras = ref(Array());

const fetchPlays = async () => {
  try {
    obras.value = await useApiStore(pinia).fetchPlays();
    viewPlays();
  } catch (err) {
    console.error(err);
  }
};
const fetchDeletePlay = async (id: number) => {
  try {
    await useApiStore(pinia).fetchDeletePlay(id);
  } catch (err) {
    console.error(err);
  }
};
const fetchPutPlay = async (id: number, title : string,description : string, synopsis : string, director: string, genre: string) => {
  try {
    console.log("Alo");
    
    await useApiStore(pinia).fetchPutPlay(id, title, description, synopsis, director, genre);
  } catch (err) {
    console.error(err);
  }
};


fetchPlays();
function viewPlays(){
  const obrasList = document.getElementById('obrasList')!;

      // Función para agregar las obras a la tabla
      function renderObras() {
        obrasList.innerHTML = '';

        obras.value.forEach(obra => {
          const row = document.createElement('tr');
          row.id = `row-${obra.id}`; 
          row.innerHTML = `
            <td class="obra-title" style="border: 1px solid black; padding: 5px;">${obra.title}</td>
            <td class="obra-description" style="border: 1px solid black; padding: 5px;">${obra.descriptionPlay}</td>
            <td class="obra-synopsis" style="border: 1px solid black; padding: 5px;">${obra.synopsis}</td>
            <td class="obra-director" style="border: 1px solid black; padding: 5px;">${obra.director}</td>
            <td class="obra-genre" style="border: 1px solid black; padding: 5px;">${obra.genre}</td>
            <td style="border: 1px solid black; padding: 5px;"><img src="./src/assets/img${obra.id}.png" style="width: 200px; height: 120px;" /></td>
            <td class="actions" style="text-align: center; justify-content: center; border: 1px solid black; padding: 5px;">
            
              <button id="modificar-${obra.id}" style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-maroon); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s;"
          onmouseover=" this.style.color='var( --color-darkgoldenrod)';"
          onmouseout="this.style.backgroundColor='var(--color-maroon)'; this.style.color='#ffffff';">Modificar</button>
          <button id="guardar-${obra.id}" style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-goldenrod); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s; display: none;"
          onmouseover=" this.style.color='var( --color-maroon)';"
          onmouseout="this.style.backgroundColor='var(--color-goldenrod)'; this.style.color='#ffffff';">Guardar</button>
          <button id="cancelar-${obra.id}" style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-maroon); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s; display: none;"
          onmouseover=" this.style.color='var( --color-darkgoldenrod)';"
          onmouseout="this.style.backgroundColor='var(--color-maroon)'; this.style.color='#ffffff';">Cancelar</button>
              <button id="eliminar-${obra.id}" style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-maroon); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s;"
          onmouseover=" this.style.color='var( --color-darkgoldenrod)';"
          onmouseout="this.style.backgroundColor='var(--color-maroon)'; this.style.color='#ffffff';">Eliminar</button>
            </td>
          `;
          obrasList.appendChild(row);
          // Agregar event listeners a los botones
          const modificarBtn = document.getElementById(`modificar-${obra.id}`)! as HTMLElement;
          modificarBtn.addEventListener('click', () => {
            modificarObra(obra.id);
            
          });

          const eliminarBtn = document.getElementById(`eliminar-${obra.id}`)!;
          eliminarBtn.addEventListener('click', () => {
            eliminarObra(obra.id);
          });
        });
      }

      
      renderObras();
}
function modificarObra(idObra: number) {
  const row = document.getElementById(`row-${idObra}`)! as HTMLTableRowElement;
  //Title
  const titleTd = row.querySelector('.obra-title') as HTMLElement;
  const titleValue = titleTd.innerText;
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.value = titleValue;
  inputTitle.style.width = '100%'; // Reducir el ancho del input
  titleTd.innerHTML = '';
  titleTd.appendChild(inputTitle);
  //Descripction
  const descriptionTd = row.querySelector('.obra-description') as HTMLElement;
  const descriptionValue = descriptionTd.innerText;
  const inputDesc = document.createElement('textarea');
  inputDesc.value = descriptionValue;
  inputDesc.style.height = '100px'; // Aumentar la altura del textarea
  inputDesc.style.width = '100%'; // Reducir el ancho del textarea
  descriptionTd.innerHTML = '';
  descriptionTd.appendChild(inputDesc);
  //Synopsis
  const synopsisTd = row.querySelector('.obra-synopsis') as HTMLElement;
  const synopsisValue = synopsisTd.innerText;
  const inputSyn = document.createElement('textarea');
  inputSyn.value = synopsisValue;
  inputSyn.style.height = '180px';
  inputSyn.style.width = '100%';
  synopsisTd.innerHTML = '';
  synopsisTd.appendChild(inputSyn);
  //Director
  const directorTd = row.querySelector('.obra-director') as HTMLElement;
  const directorValue = directorTd.innerText;
  const inputDir = document.createElement('textarea');
  inputDir.value = directorValue;
  inputDir.style.height = '180px';
  inputDir.style.width = '100%';
  directorTd.innerHTML = '';
  directorTd.appendChild(inputDir);
  //Genre
  const genreTd = row.querySelector('.obra-genre') as HTMLElement;
  const genreValue = genreTd.innerText;
  const inputGenre = document.createElement('input');
  inputGenre.value = genreValue;
  genreTd.innerHTML = '';
  genreTd.appendChild(inputGenre);

  const modificarBtn = document.getElementById(`modificar-${idObra}`)! as HTMLButtonElement;
  const guardarBtn = document.getElementById(`guardar-${idObra}`)! as HTMLButtonElement;
  const cancelarBtn = document.getElementById(`cancelar-${idObra}`)! as HTMLButtonElement;

  modificarBtn.style.display = 'none';
  guardarBtn.style.display = 'inline-block';
  cancelarBtn.style.display = 'inline-block';

    guardarBtn.addEventListener('click', () => {
      const newTitle = inputTitle.value;
      titleTd.innerHTML = newTitle;
      const newDesc = inputDesc.value;
      descriptionTd.innerHTML = newDesc;
      const newSynopsis = inputSyn.value;
      synopsisTd.innerHTML = newSynopsis;
      const newDirector = inputDir.value;
      directorTd.innerHTML = newDirector;
      const newGenre = inputGenre.value;
      genreTd.innerHTML = newGenre;

      console.log("Id: "+idObra);
      console.log("Title: "+newTitle);
      console.log("Desc: "+newDesc);
      console.log("Synop: "+newSynopsis);
      console.log("Director: "+newDirector);
      console.log("Genre: "+newGenre);
      // Aquí puedes llamar a una función para guardar los cambios, si es necesario
      fetchPutPlay(idObra, newTitle, newDesc, newSynopsis, newDirector, newGenre);

      modificarBtn.style.display = 'inline-block';
      guardarBtn.style.display = 'none';
      cancelarBtn.style.display = 'none';
    });

    cancelarBtn.addEventListener('click', () => {
      titleTd.innerHTML = titleValue;
      descriptionTd.innerHTML = descriptionValue;
      synopsisTd.innerHTML = synopsisValue;
      directorTd.innerHTML = directorValue;
      genreTd.innerHTML = genreValue;

      modificarBtn.style.display = 'inline-block';
      guardarBtn.style.display = 'none';
      cancelarBtn.style.display = 'none';
    });
}


  function eliminarObra(idObra:number) {
        fetchDeletePlay(idObra);
        alert('Obra eliminada correctamente');
        window.location.reload();
      }
</script>
<template>
<table>
    <thead>
      <tr>
        <th class="title">Título</th>
        <th>Descripción</th>
        <th>Sinopsis</th>
        <th>Director</th>
        <th>Género</th>
        <th>Imagen</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody id="obrasList">
        
        
        
    </tbody>
  </table> 
</template>
<style scoped>
    #obrasList .actions{
    font-size: 100px;
  }
table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 0px;
      margin-bottom: 20px;
}
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
    }
    #obrasList td{
      margin-bottom: 50px;
      border: 1px solid #000;
    }
    #obrasList{
        font-family: var(--font-gentium-basic);
        font-size: var(--font-size-xl);
    }
    th {
      width: fit-content; 
      background-color: var(--color-maroon);
      color: var(--color-goldenrod);
      text-align: center;
      font-family: var(--font-lobster);
      font-size: var(--headings-h3-size);
    }
</style>