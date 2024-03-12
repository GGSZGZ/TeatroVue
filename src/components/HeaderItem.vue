<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useApiStore, pinia } from '../store/api';
import { useRouter } from 'vue-router';
//import css
import "../assets/main.css";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("myCanvasH") as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    let animationId: number | null = null; // ID de la animación
    const canvasWidth = 286; // Ancho específico del canvas
    let maskX = canvasWidth-100;
    if (ctx) {
        canvas.addEventListener('mouseenter', startAnimation);
        canvas.addEventListener('mouseleave', stopAnimation);

        drawStop();
    }
    function startAnimation() {
            if (!animationId) {
                maskX = canvasWidth-100; 
                drawMask(); // Iniciar la animación
            }
        }
    function drawMask() {
                    ctx.clearRect(0, 0, canvasWidth, canvas.height); // Limpiar el canvas
                    const gradient = ctx.createLinearGradient(canvas.width/3, 0, canvas.width, 0);
                    gradient.addColorStop(0, 'orange');
                    gradient.addColorStop(0.2, 'yellow');
                    //Máscara izquierda
                    ctx.beginPath();
                    ctx.moveTo(63-maskX, 57);
                    ctx.quadraticCurveTo(101-maskX, 24, 148-maskX, 38);
                    ctx.quadraticCurveTo(177-maskX, 120, 127-maskX, 142);
                    ctx.quadraticCurveTo(69-maskX, 141, 64-maskX, 57);
                    ctx.moveTo(66-maskX, 55);
                    ctx.lineWidth = 8;
                    ctx.strokeStyle = gradient;
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo izquierdo - Máscara Izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(83-maskX, 77, 83-maskX, 77);
                    ctx.quadraticCurveTo(106-maskX, 85, 102-maskX, 61);
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo derecho - Máscara izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(116-maskX, 58, 116-maskX, 59);
                    ctx.quadraticCurveTo(124-maskX, 84, 144-maskX, 65);
                    ctx.stroke();
                    ctx.closePath();
                    //Sonrisa - Máscara Izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(101-maskX, 117, 100-maskX, 117);
                    ctx.quadraticCurveTo(120-maskX, 85, 140-maskX, 113);
                    ctx.stroke();
                    ctx.closePath();

                    //Máscara Derecha
                    const grd = ctx.createLinearGradient(canvasWidth / 3, 0, canvasWidth, 0);
                    grd.addColorStop(0.7, 'yellow');
                    grd.addColorStop(0, 'orange');
                    //Máscara Derecha - Forma
                    ctx.beginPath();
                    ctx.moveTo(maskX+164, canvas.height-158);
                    ctx.quadraticCurveTo(164+maskX, 67, 159+maskX, 67);
                    ctx.quadraticCurveTo(204+maskX, 67, 220+maskX, 89);
                    ctx.quadraticCurveTo(218+maskX, 142, 185+maskX, 167);
                    ctx.quadraticCurveTo(147+maskX, 180, 132+maskX, 140);
                    ctx.lineWidth = 8;
                    ctx.strokeStyle = grd;
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo izquierdo-Máscara Derecha
                    ctx.beginPath();
                    ctx.lineTo(152+maskX, 101);
                    ctx.quadraticCurveTo(160+maskX, 101, 164+maskX, 108);
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo Derecho - Máscara Derecha
                    ctx.beginPath();
                    ctx.lineTo(180+maskX, 109);
                    ctx.quadraticCurveTo(190+maskX, 98, 202+maskX, 110);
                    ctx.stroke();
                    ctx.closePath();
                    //Boca - Máscara Derecha
                    ctx.beginPath();
                    ctx.lineTo(150+maskX, 128);
                    ctx.quadraticCurveTo(157+maskX, 153, 184+maskX, 143);
                    ctx.stroke();
                    ctx.closePath();
                    maskX -= 3; // Mover la máscara hacia la izquierda

                    if (maskX >-1) {
                        animationId = requestAnimationFrame(drawMask); // Solicitar el próximo cuadro de animación
                    }
                }
    function drawStop(){
          const gradient = ctx.createLinearGradient(canvas.width/3, 0, canvas.width, 0);
          gradient.addColorStop(0, 'orange');
          gradient.addColorStop(0.2, 'yellow');
                    //Máscara izquierda
                    ctx.beginPath();
                    ctx.moveTo(63, 57);
                    ctx.quadraticCurveTo(101, 24, 148, 38);
                    ctx.quadraticCurveTo(177, 120, 127, 142);
                    ctx.quadraticCurveTo(69, 141, 64, 57);
                    ctx.moveTo(66, 55);
                    ctx.lineWidth = 8;
                    ctx.strokeStyle = gradient;
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo izquierdo - Máscara Izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(83, 77, 83, 77);
                    ctx.quadraticCurveTo(106, 85, 102, 61);
                    ctx.stroke();
                    ctx.closePath();
                    //Ojo derecho - Máscara izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(116, 58, 116, 59);
                    ctx.quadraticCurveTo(124, 84, 144, 65);
                    ctx.stroke();
                    ctx.closePath();
                    //Sonrisa - Máscara Izquierda
                    ctx.beginPath();
                    ctx.quadraticCurveTo(101, 117, 100, 117);
                    ctx.quadraticCurveTo(120, 85, 140, 113);
                    ctx.stroke();
                    ctx.closePath();

          //Máscara Derecha
          const grd = ctx.createLinearGradient(canvas.width/3, 0, canvas.width, 0);
          grd.addColorStop(0.7, 'yellow');
          grd.addColorStop(0, 'orange');
          ctx.beginPath();
          ctx.quadraticCurveTo(164, 67, 159, 67);
          ctx.quadraticCurveTo(204, 67, 220, 89);
          ctx.quadraticCurveTo(218, 142, 185, 167);
          ctx.quadraticCurveTo(147, 180, 132, 140);
          ctx.lineWidth = 8;
          ctx.strokeStyle = grd;
          ctx.stroke();
          ctx.closePath();
          //Ojo izquierdo-Máscara Derecha
          ctx.beginPath();
          ctx.lineTo(152, 101);
          ctx.quadraticCurveTo(160, 101, 164, 108);
          ctx.stroke();
          ctx.closePath();
          //Ojo Derecho - Máscara Derecha
          ctx.beginPath();
          ctx.lineTo(180, 109);
          ctx.quadraticCurveTo(190, 98, 202, 110);
          ctx.stroke();
          ctx.closePath();
          //Boca - Máscara Derecha
          ctx.beginPath();
          ctx.lineTo(150, 128);
          ctx.quadraticCurveTo(157, 153, 184, 143);
          ctx.stroke();
          ctx.closePath();
        }
    function stopAnimation() {
            if (animationId) {
                cancelAnimationFrame(animationId); // Detener la animación
                animationId = null; // Restablecer el ID de la animación
                ctx.clearRect(0, 0, canvasWidth, canvas.height); // Limpiar el canvas
                drawStop();
            }
        }

        const container = document.querySelector('.container') as HTMLElement;
        const input = document.querySelector('.input-search') as HTMLElement;
        const searchRes = document.querySelector('.search-results') as HTMLElement;
        container?.addEventListener('click', ()=> {
          //Container
          container.style.background = 'var(--color-gray)';
          //Input
          input.style.width = '700px';
          input.style.height = '60px';
          input.style.opacity = '1';
          input.style.left = '-650px';
          input.style.cursor = 'text';
          //UL
          searchRes.style.display = 'block';
          searchRes.style.width = '800%';
          searchRes.style.left = '-650px';
        })
      });

      document.addEventListener('click', (event) => {
        const container = document.querySelector('.container') as HTMLElement;
        const input = document.querySelector('.input-search') as HTMLElement;
        const searchRes = document.querySelector('.search-results') as HTMLElement;

        if (!container.contains(event.target as Node)) {
          // Si el clic ocurrió fuera del contenedor
          container.style.background = ''; // Restaurar el fondo
          input.style.width = '';
          input.style.height = '';
          input.style.opacity = '';
          input.style.left = '';
          input.style.cursor = '';
          searchRes.style.display = ''; // Ocultar los resultados
          searchRes.style.width = '';
          searchRes.style.left = '';
          
        }
    });


interface Play {
  id: number;
  title: string;
  
}

const plays = ref<Play[]>([]);

const fetchPlays = async () => {
  try {
    plays.value = await useApiStore(pinia).fetchPlays();
  } catch (err) {
    console.error(err);
  }
};
fetchPlays();

//Search Logic
const searchTerm = ref('');

const searchPlays = () => {
  plays.value.forEach(play =>{
    const li = document.querySelector(`.search-results li.play${play.id}`)! as HTMLElement;
    if(play.title.toLowerCase().includes(searchTerm.value.toLowerCase())){
      li.style.display = 'block';
    }else{
      li.style.display = 'none';
    }
  })
  
  
};


//Obras
let router = useRouter();
let navigateToObra = (id: number) => {
      router.replace({ name: 'card', params: { id: id.toString() } });
      setTimeout(() => {
        window.location.reload();
      }, 0);
      
    };
</script>
<template>
<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Playfair Display:wght@400;600;700&display=swap"
    />
  <div class="logo">
    <canvas id="myCanvasH" width="286px" height="220px" class="logo-1-icon">

    </canvas>
      <slot name="logosearchtexto"></slot>
          
  </div>

    <nav class="sections">
        <h3 class="admin">
          <slot name="admin"></slot>
        </h3>
        <h3 class="home">
          <slot name="home"></slot>
        </h3>
        
        <h3 class="about">
        <slot name="about"></slot>
        </h3>
        <h3 class="about">
        <slot name="contact"></slot>
    </h3>
  </nav>
    <slot name="hrindex">
        <hr class="header-line-hr">
    </slot>
    <slot name="iconregister"></slot>
    <div class="container">
      <input class="input-search" type="text" placeholder="Search" v-model="searchTerm" @input="searchPlays">
      <img alt="" src="../assets/searchIcon.png" class="search"/>
      <ul  class="search-results">
        <li v-for="play in plays" :key="play.id" @click="navigateToObra(play.id)" :class="'play' + play.id"> {{ play.title }}</li>
      </ul>
    </div>


</template>

<style scoped>

.logo{
    position: absolute;
    top: 0;
    left: 0;
    width: 458px;
    height: 80px;
}
.logo-1-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 143px;
  height: 110px;
  object-fit: cover;
}
.sections{
    transform: scale(0.7);
    right: 20px;
    margin: 0;
    position: absolute;
    top: 46px;
    right: 196px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 33px;
    text-align: center;
    font-size: 28px;
    color: #5d5a88;
    font-family: var(--font-playfair-display);
  }

.header-line-hr {
  position: absolute;
  top: 109px;
  width: 100%;
  border-color: #000;
}
.home {
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
}
.about {
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
}
.admin{
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 400;
  font-family: inherit;
  display: none;
}
/*Search*/
.container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 13px;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  left: 90%;
  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.2);
  transform: scale(0.7);
  background-color: white;
  z-index: 10;
  cursor: pointer;
  
}


.search {
  position: absolute;
  width: 40px;
  height: 40px;
  transition: all 1s;
  z-index: 4;
}

input {
  position: absolute;
  margin: auto;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background: var(--color-maroon);
  border-radius: 30px;
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  left: 20px; /* Ajustado a la izquierda */
  padding-left: 20px;
  color: var(--color-goldenrod);
  cursor: pointer;
}

input::placeholder{
  color: var(--color-goldenrod);
  opacity: 0.5;
  font-weight: bolder;
}
.search-results {
  position: absolute;
  top: 100%; 
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  display:none;
}

.search-results li{
  line-height: 50px;
  height: 50px;
  font-family: var(--font-playfair-display);
  color: var(--color-gray);
  font-size: var(--font-size-xl);
  cursor: pointer;
  padding-left: 10px;
  position: relative; /* Asegura que el z-index funcione */
  z-index: 1000; /* Elige un valor alto para colocarlo por delante */
}
.search-results li:hover{
  background-color: var(--color-goldenrod);
}


</style>