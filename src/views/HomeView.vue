<script setup lang="ts">

import CardItem from '../components/CardItem.vue';
import CarrouselItemVue from '../components/CarrouselItem.vue';
import CalendarItem from '../components/CalendarItem.vue';
import "../assets/main.css";
import { useRouter } from 'vue-router';

let obras=[
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
]

   let obras1=obras.filter(obra => [7, 10, 11, 12, 8, 9].includes(obra.idObra));
   let obras2=obras.filter(obra => ![7, 10, 11, 12, 8, 9].includes(obra.idObra));

  //Obras
  const router = useRouter();
  const navigateToObra = (idObra: number) => {
    router.push({ name: 'obra', params: { id: idObra.toString() } });
  };
</script>
<template>

<main>
  <CarrouselItemVue />
  <section class="grip" id="grip">
    <div class="grip-cards1">
      <CardItem v-for="obra in obras2"
        :key="obra.idObra"
        :idObra="obra.idObra"
        :classNumber="obra.class"
        :classImg="obra.classImg"
        :title="obra.title"
        :descripcion="obra.descripcion"
        :sinopsis="obra.sinopsis"
        :asientos="obra.asientos"
        @click="navigateToObra(obra.idObra)">
      </CardItem>
    </div>
    <div class="grip-cards">
      <CardItem v-for="obra in obras1"
        :key="obra.idObra"
        :idObra="obra.idObra"
        :classNumber="obra.class"
        :classImg="obra.classImg"
        :title="obra.title"
        :descripcion="obra.descripcion"
        :sinopsis="obra.sinopsis"
        :asientos="obra.asientos"
        @click="navigateToObra(obra.idObra)">
      </CardItem>
    </div>
    </section>
  </main>
  <CalendarItem />
</template>

<style scoped>
.grip-cards {
  position: absolute;
  top: 1200px;
  width: 1220px;
  height: 1036px;
  margin-left: 1.8%;
}
.grip-cards1 {
  position: absolute;
  top: 140px;
  left: 0;
  width: 1220px;
  height: 1036px;
  margin-left: 1.8%;
}

.grip {
  position: absolute;
  top: 0;
  left: 0;
  width: 1220px;
  height: 1036px;
  margin-left: 9%;
  top: 784px;
  left: 110px;
  height: 2092px;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-maroon);
  font-family: var(--font-gentium-basic);
}
.grip{
    left: 5px;
    top:685px;
    width: 400px;
  }
  .grip-cards, .grip-cards1{
    width:400px;
  }
main{
  background-color: var(--color-maroon);
  width: 100%;
  height: 4000px;
  text-align: center;
  font-size: var(--font-size-25xl);
  color: var(--color-goldenrod);
  font-family: var(--font-lobster);
}

</style>