<script setup lang="ts">
import { ref, onMounted } from 'vue';
let obras=ref([
{
    class : 0,
    idObra: 1,
    classImg:13,
    title: "La Máscara",
    descripcion: "Una obra intrigante que explora los misterios del teatro clásico.",
    sinopsis: "En el bullicioso mundo teatral del siglo XIX, un enmascarado misterioso acecha entre bambalinas, desentrañando secretos oscuros y rivalidades encubiertas. Con giros inesperados, 'La Máscara Oculta' transporta a la audiencia a un viaje lleno de intriga y emoción.",
    asientos: []
  },  
  {
    class : 1,
    idObra: 4,
    classImg:23,
    title: "Romeo y Julieta",
    descripcion: "Una versión contemporánea del clásico de Shakespeare con un giro moderno.",
    sinopsis: "En las bulliciosas calles de la ciudad actual, dos almas destinadas se encuentran en medio de la rivalidad de sus familias. 'Romeo y Julieta Reimaginados' fusiona la poesía de Shakespeare con la vibrante energía de la cultura urbana, explorando el amor y la tragedia en el siglo XXI.",
    asientos: []
  },  
  {
    class : 2,
    idObra: 5,
    classImg:24,
    title: "Los Sueños",
    descripcion: "Una odisea surrealista a través de la mente humana.",
    sinopsis: "Sumérgete en el fascinante paisaje de los sueños con 'El Jardín de los Sueños'. Esta obra surrealista lleva al público a un viaje introspectivo a medida que los personajes navegan por los recovecos de la mente humana, explorando deseos, miedos y esperanzas ocultas.",
    asientos: []
  },
  {
    class : 3,
    idObra: 6,
    classImg:25,
    title: "El Último Acto",
    descripcion: "Un drama conmovedor sobre la vida, la pérdida y la redención.",
    sinopsis: "En un pequeño teatro al borde de la quiebra, un grupo de actores veteranos se reúne para una última actuación que cambiará sus vidas para siempre. 'El Último Acto' es un conmovedor tributo al poder del arte y la capacidad de encontrar significado incluso en los momentos más oscuros.",
    asientos: []
  },
  {
    class : 4,
    idObra: 2,
    classImg:22,
    title: "En el Escenario",
    descripcion: "Una experiencia teatral única para toda la familia.",
    sinopsis: "Acompaña a personajes entrañables en un viaje mágico a través de cuentos clásicos y nuevos relatos. 'Cuentos en el Escenario' combina la magia del teatro con la nostalgia de los cuentos, creando un espectáculo encantador para todas las edades.",
    asientos: []
  },
  {
    class : 5,
    idObra: 3,
    classImg:21,
    title: "La Noche",
    descripcion: "Un thriller teatral que mantendrá al público al borde de sus asientos.",
    sinopsis: "En una ciudad envuelta en sombras, un detective atormentado se enfrenta a su caso más oscuro. 'El Misterio de la Noche' es un fascinante juego de ingenio y suspense que desafía al público a resolver el enigma antes de que se revele la verdad impactante.",
    asientos: []
  },
  {
    class : 0,
    idObra: 7,
    classImg:26,
    title: "Sinfonía de Risas",
    descripcion: "Una comedia musical llena de risas y alegría.",
    sinopsis: "En un mundo donde la risa es la moneda de cambio, 'Sinfonía de Risas' lleva al público a un viaje musical hilarante. Con números pegajosos y situaciones cómicas, esta obra es un antídoto perfecto para el estrés diario, ofreciendo una experiencia teatral ligera y divertida.",
    asientos: []
  },
  {
    class : 1,
    idObra: 10,
    classImg:29,
    title: "Legado del Escenario",
    descripcion: "Un homenaje a los clásicos del teatro a lo largo de los siglos.",
    sinopsis: "A través de escenas icónicas y monólogos inolvidables, 'El Legado del Escenario' rinde homenaje a las obras maestras que han definido el teatro a lo largo de la historia. Desde Shakespeare hasta Beckett, esta obra es un recordatorio conmovedor de la perdurabilidad del arte escénico.",
    asientos: []
  },
  {
    class : 2,
    idObra: 11,
    classImg:30,
    title: "El Espejo Roto",
    descripcion: "Un drama introspectivo sobre la identidad y el autodescubrimiento.",
    sinopsis: "Cuando un espejo mágico revela versiones alternativas de sí mismos, los personajes de 'El Espejo Roto' se ven obligados a confrontar sus verdaderas identidades. Esta obra provocativa invita a la audiencia a reflexionar sobre la percepción y la realidad en un mundo lleno de reflejos fragmentados.",
    asientos: []
  },  
  {
    class : 3,
    idObra: 12,
    classImg:31,
    title: "Sueños",
    descripcion: "Una epopeya fantástica que desafía la realidad y la imaginación.",
    sinopsis: "En un reino donde los sueños tienen el poder de cambiar la realidad, un grupo de valientes aventureros emprende una búsqueda épica. 'Cazadores de Sueños' combina elementos de fantasía, acción y magia para ofrecer una experiencia teatral que transporta al público a mundos inexplorados.",
    asientos: []
  },
  {
    class : 4,
    idObra: 8,
    classImg:27,
    title: "El Despertar",
    descripcion: "Un thriller psicológico que desafía la percepción de la realidad.",
    sinopsis: "En un manicomio abandonado, un psiquiatra se enfrenta a los fantasmas de su pasado mientras trata a un paciente con una conexión sorprendente. 'El Despertar de las Sombras' explora los límites de la cordura y la verdad en un viaje psicológico inolvidable.",
    asientos: []
  },
  {
    class : 5,
    idObra: 9,
    classImg:28,
    title: "Las Emociones",
    descripcion: "Una experiencia teatral visualmente impactante que celebra la diversidad emocional.",
    sinopsis: "Con un enfoque innovador en la expresión emocional, 'Caleidoscopio de Emociones' fusiona la danza, el teatro y la tecnología para llevar al público a un viaje visualmente deslumbrante. Desde la euforia hasta la melancolía, esta obra invita a explorar la complejidad de las emociones humanas.",
    asientos: []
  }
])
onMounted(() => {
      const obrasList = document.getElementById('obrasList')!;

      // Función para agregar las obras a la tabla
      function renderObras() {
        obrasList.innerHTML = '';

        obras.value.forEach(obra => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${obra.title}</td>
            <td>${obra.descripcion}</td>
            <td>${obra.sinopsis}</td>
            <td><img src="./src/assets/img${obra.idObra}.png" style="width: 200px; height: 120px;" /></td>
            <td class="actions" style="text-align: center; justify-content: center;">
            
              <button style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-maroon); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s;"
          onmouseover=" this.style.color='var( --color-darkgoldenrod)';"
          onmouseout="this.style.backgroundColor='var(--color-maroon)'; this.style.color='#ffffff';" onclick="modificarObra(${obra.idObra})">Modificar</button>
              <button style="width: 90%; padding: 10px; margin: 5px; background-color: var(--color-maroon); color: #ffffff; cursor: pointer; font-size: 16px; border-radius: 5px; transition: background-color 0.3s, color 0.3s;"
          onmouseover=" this.style.color='var( --color-darkgoldenrod)';"
          onmouseout="this.style.backgroundColor='var(--color-maroon)'; this.style.color='#ffffff';" onclick="eliminarObra(${obra.idObra})">Eliminar</button>
            </td>
          `;
          obrasList.appendChild(row);
        });
      }

      //modificar, eliminar y añadir obras
      function añadirObra(idObra:number) {
       
        console.log(`Añadir obra con ID ${idObra}`);
      }

      function modificarObra(idObra:number) {
        
        console.log(`Modificar obra con ID ${idObra}`);
      }

      function eliminarObra(idObra:number) {
        
        console.log(`Eliminar obra con ID ${idObra}`);
      }
      renderObras();
    });
</script>
<template>
    <button onclick="añadirObra(${obra.idObra})">Añadir Obra</button>
<table>
    <thead>
      <tr>
        <th class="title">Título</th>
        <th>Descripción</th>
        <th>Sinopsis</th>
        <th>Imagen</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody id="obrasList">
        
        
        
    </tbody>
  </table> 
</template>
<style scoped>
#obrasList.actions{
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
  #obrasList .actions button {
    width: 100%;
    padding: 10px;
    margin: 5px;
    border: 2px solid #3498db;
    background-color: #3498db;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    }
    button{
        width: 10%; 
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
</style>