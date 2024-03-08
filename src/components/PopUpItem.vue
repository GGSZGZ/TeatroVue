<script setup lang="ts">
import { defineProps, onMounted, onUpdated} from 'vue';
let asientosCount=0;
let ticketsComprados;
let filaColumnaOcupadas: string[] ;
function navigateToTickets(){
if(asientosCount!=0){
  emits('navigateToTickets');
}else{
  alert('Debes al menos seleccionar una butaca');
}
}
function storeSelectedSeats(seats: number[][]){
  localStorage.setItem('selectedSeats', JSON.stringify(seats));
}
const props = defineProps({
  show: Boolean
});
const emits = defineEmits(['togglePopUp', 'navigateToTickets'])

const applyPopupStyles = () => {
      const popup = document.getElementById("desktopPopUp");
      if (popup) {
        const popupStyle = popup.style;
        if (popupStyle) {
          popupStyle.position = "fixed";
          popupStyle.top = '50%';
          popupStyle.left = '50%';
          popupStyle.transform = "translate(-50%, -50%)";
          popupStyle.display = "flex";
          popupStyle.zIndex = '9999';
          popupStyle.backgroundColor = "rgba(128, 128, 128, 0.7)";
          popupStyle.alignItems = "center";
          popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");

        const onClick = (e: MouseEvent) => {
          if (e.target === popup && popup.hasAttribute("closable")) {
            popup.style.display = "none";
            emits('togglePopUp');
            limpiarSalaDeCine();
          }
        };

        popup.addEventListener("click", onClick);
      }
    };
    onMounted(() => {
      setTimeout(() => {
      ticketsComprados=localStorage.getItem('ticketsOcupadosPopup')!;
      if(ticketsComprados.length>=113){
        const ticketsArray = JSON.parse(ticketsComprados);
        filaColumnaOcupadas = ticketsArray.map(elemento => `${elemento.ticketRow},${elemento.ticketColumn}`);
        
      }
        applyPopupStyles();
        crearSalaDeCine(6,6);
        
      }, 0);
        
    });
    onUpdated(() => {
        applyPopupStyles();
    })

    function limpiarSalaDeCine() {
      const salaCine = document.getElementById('sala-cine')!;
      const cantidad = document.getElementById('cantidad') as HTMLElement;
      const precio = document.getElementById('importe') as HTMLElement;
      
      salaCine.innerHTML = ''; // Elimina todos los elementos dentro del contenedor de la sala de cine
      importe = 0; // Reinicia el importe
      cantidadAsientos = 0; // Reinicia la cantidad de asientos
      cantidad.textContent = "ENTRADAS SELECCIONADAS: "+ cantidadAsientos;
      precio.textContent = "IMPORTE TOTAL: "+importe+"€";
      asientosOcupados = []; // Reinicia la lista de asientos ocupados
      const tbody = document.getElementById('asientosSeleccionados')!;
      tbody.innerHTML = '';
  }

    // Función para crear la sala de cine
    let importe: number = 0;
        let cantidadAsientos: number;
        let asientosOcupados: number[] = [];
        
        function crearSalaDeCine(filas: number, columnas: number): void {
          
          limpiarSalaDeCine();
          asientosOcupados=filaColumnaOcupadas;
            const salaCine = document.getElementById('sala-cine') as HTMLElement;
            const cantidad = document.getElementById('cantidad') as HTMLElement;
            const precio = document.getElementById('importe') as HTMLElement;
            
            const asientosSeleccionadosArray: number[] = [];
            
                for (let fila = 1; fila <= filas; fila++) {
                    for (let columna = 1; columna <= columnas; columna++) {
                        const asiento = document.createElement('div');
                        asiento.classList.add('asiento');
                        
                        const svgContent =`<?xml version="1.0" standalone="no"?>
                                            <svg id="svgElement" version="1.0"  xmlns="http://www.w3.org/2000/svg"
                                            width="140.000000pt" height="40.000000pt" viewBox="0 0 128.000000 128.000000">
                                            
                                            <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                                            fill="none" stroke="white">
                                            <path d="M0 640 l0 -640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 -640z m987
                                            467 c58 -31 67 -57 73 -196 l5 -126 31 -3 c17 -2 41 -13 53 -26 21 -22 21 -28
                                            19 -312 l-3 -289 -80 0 -80 0 -5 65 -5 65 -355 0 -355 0 -5 -65 -5 -65 -80 0
                                            -80 0 -3 289 c-2 284 -2 290 19 312 12 13 36 24 53 26 l31 3 5 125 c9 220 11
                                            221 435 217 265 -2 304 -4 332 -20z" />
                                            
                                            <path d="M307 1069 c-36 -21 -47 -63 -47 -179 l0 -110 30 0 c19 0 40 -9 55
                                            -25 24 -23 25 -31 25 -135 l0 -110 270 0 270 0 0 110 c0 104 1 112 25 135 15
                                            16 36 25 55 25 l30 0 0 110 c0 117 -12 159 -49 180 -26 14 -640 13 -664 -1z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M162 728 c-9 -9 -12 -68 -12 -205 l0 -193 90 0 90 0 0 186 c0 109 -4
                                            193 -10 205 -9 16 -22 19 -78 19 -40 0 -73 -5 -80 -12z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M960 721 c-6 -12 -10 -96 -10 -205 l0 -186 90 0 90 0 0 193 c0 137
                                            -3 196 -12 205 -7 7 -40 12 -80 12 -56 0 -69 -3 -78 -19z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M370 395 l0 -65 270 0 270 0 0 65 0 65 -270 0 -270 0 0 -65z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M150 246 l0 -46 46 0 45 0 -3 43 c-3 42 -3 42 -45 45 l-43 3 0 -45z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M1047 283 c-4 -3 -7 -24 -7 -45 l0 -38 45 0 45 0 0 45 0 45 -38 0
                                            c-21 0 -42 -3 -45 -7z" class="yellow" fill="#f9f9f9"/>
                                            </g>
                                            <text x="50%" y="50%" class="asiento-text" text-anchor="middle">${fila}-${columna}</text>
                                            </svg> 
                                            `
                        asiento.innerHTML = svgContent;


                        const indiceAsiento = (fila - 1) * columnas + columna;

                        asientosOcupados.forEach(element => {
                          
                          
                          if(element.split(','[0])[0]==fila && element.split(','[0])[1]==columna){

                            asiento.classList.add('asiento-ocupado');
                            asiento.innerHTML='';
                            asiento.classList.add('asiento');
                          }
                        });
                        
                        salaCine.appendChild(asiento);
                       
                        
                        asiento.addEventListener('click', function () {
                          //ocultar text
                          var textSvg=asiento.querySelector('.asiento-text') as HTMLElement;
                          
                          if(textSvg!=null){
                            textSvg.style.visibility = 'hidden';
                        


                            if (!this.classList.contains('asiento-ocupado')) {
                                this.classList.toggle('asiento-seleccionado');
                                //animacion
                                var pathBlack = asiento.querySelectorAll('.yellow') as any;
                                
                                pathBlack.forEach((pathBlack : any) => {
                                  pathBlack.style.animationName = "dash";
                                    pathBlack.style.animationDuration = "2s";
                                    // pathBlack.style.animationIterationCount = "infinite";
                                    pathBlack.style.animationDirection = "alternate";
                                });
                               
                                let asientosSeleccionadosImage = document.querySelectorAll('.asiento-seleccionado');

                                if(asientosSeleccionadosImage.length<=6){
                                setTimeout(() => {
                                this.innerHTML=`<?xml version="1.0" standalone="no"?>
                                                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                  width="140.000000pt" height="40.000000pt" viewBox="0 0 128.000000 128.000000">

                                                  <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                                                  fill="none" stroke="white">
                                                  <path d="M0 640 l0 -640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 -640z m987
                                                  467 c58 -31 67 -57 73 -196 l5 -126 31 -3 c17 -2 41 -13 53 -26 21 -22 21 -28
                                                  19 -312 l-3 -289 -80 0 -80 0 -5 65 -5 65 -355 0 -355 0 -5 -65 -5 -65 -80 0
                                                  -80 0 -3 289 c-2 284 -2 290 19 312 12 13 36 24 53 26 l31 3 5 125 c9 220 11
                                                  221 435 217 265 -2 304 -4 332 -20z"/>
                                                  <path d="M307 1069 c-36 -21 -47 -63 -47 -179 l0 -110 30 0 c19 0 40 -9 55
                                                  -25 24 -23 25 -31 25 -135 l0 -110 270 0 270 0 0 110 c0 104 1 112 25 135 15
                                                  16 36 25 55 25 l30 0 0 110 c0 117 -12 159 -49 180 -26 14 -640 13 -664 -1z"class="yellow" fill="#cc9936"/>
                                                  <path d="M162 728 c-9 -9 -12 -68 -12 -205 l0 -193 90 0 90 0 0 186 c0 109 -4
                                                  193 -10 205 -9 16 -22 19 -78 19 -40 0 -73 -5 -80 -12z" class="yellow" fill="#cc9936"/>
                                                  <path d="M960 721 c-6 -12 -10 -96 -10 -205 l0 -186 90 0 90 0 0 193 c0 137
                                                  -3 196 -12 205 -7 7 -40 12 -80 12 -56 0 -69 -3 -78 -19z" class="yellow" fill="#cc9936"/>
                                                  <path d="M370 395 l0 -65 270 0 270 0 0 65 0 65 -270 0 -270 0 0 -65z" class="yellow" fill="#cc9936"/>
                                                  <path d="M150 246 l0 -46 46 0 45 0 -3 43 c-3 42 -3 42 -45 45 l-43 3 0 -45z" class="yellow" fill="#cc9936"/>
                                                  <path d="M1047 283 c-4 -3 -7 -24 -7 -45 l0 -38 45 0 45 0 0 45 0 45 -38 0
                                                  c-21 0 -42 -3 -45 -7z" class="yellow" fill="#cc9936"/>
                                                  </g>
                                                  <text x="50%" y="50%" class="asiento-text" text-anchor="middle">${fila}-${columna}</text>
                                                  </svg>`;
                                                }, 1000);
                                              }
                                  // this.classList.add('asiento-ocupado');
                                // Extraer el número de fila y columna del texto del asiento
                                const numeroAsiento = this.querySelector('svg text.asiento-text')?.textContent as string;
                                
                                const numeroFila = parseInt(numeroAsiento.charAt(0));
                                const numeroColumna = parseInt(numeroAsiento.charAt(2));
                        
                                asientosSeleccionadosImage = document.querySelectorAll('.asiento-seleccionado');
                                
                                if (asientosSeleccionadosImage.length > 6) {
                                    alert('¡Ya has seleccionado el máximo de 6 asientos!');
                                    this.classList.remove('asiento-seleccionado');
                                    this.innerHTML=`<?xml version="1.0" standalone="no"?>
                                            <svg id="svgElement" version="1.0"  xmlns="http://www.w3.org/2000/svg"
                                            width="140.000000pt" height="40.000000pt" viewBox="0 0 128.000000 128.000000">
                                            
                                            <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                                            fill="none" stroke="white">
                                            <path d="M0 640 l0 -640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 -640z m987
                                            467 c58 -31 67 -57 73 -196 l5 -126 31 -3 c17 -2 41 -13 53 -26 21 -22 21 -28
                                            19 -312 l-3 -289 -80 0 -80 0 -5 65 -5 65 -355 0 -355 0 -5 -65 -5 -65 -80 0
                                            -80 0 -3 289 c-2 284 -2 290 19 312 12 13 36 24 53 26 l31 3 5 125 c9 220 11
                                            221 435 217 265 -2 304 -4 332 -20z" />
                                            
                                            <path d="M307 1069 c-36 -21 -47 -63 -47 -179 l0 -110 30 0 c19 0 40 -9 55
                                            -25 24 -23 25 -31 25 -135 l0 -110 270 0 270 0 0 110 c0 104 1 112 25 135 15
                                            16 36 25 55 25 l30 0 0 110 c0 117 -12 159 -49 180 -26 14 -640 13 -664 -1z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M162 728 c-9 -9 -12 -68 -12 -205 l0 -193 90 0 90 0 0 186 c0 109 -4
                                            193 -10 205 -9 16 -22 19 -78 19 -40 0 -73 -5 -80 -12z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M960 721 c-6 -12 -10 -96 -10 -205 l0 -186 90 0 90 0 0 193 c0 137
                                            -3 196 -12 205 -7 7 -40 12 -80 12 -56 0 -69 -3 -78 -19z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M370 395 l0 -65 270 0 270 0 0 65 0 65 -270 0 -270 0 0 -65z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M150 246 l0 -46 46 0 45 0 -3 43 c-3 42 -3 42 -45 45 l-43 3 0 -45z" class="yellow" fill="#f9f9f9"/>
                                            <path d="M1047 283 c-4 -3 -7 -24 -7 -45 l0 -38 45 0 45 0 0 45 0 45 -38 0
                                            c-21 0 -42 -3 -45 -7z" class="yellow" fill="#f9f9f9"/>
                                            </g>
                                            <text x="50%" y="50%" class="asiento-text" text-anchor="middle">${fila}-${columna}</text>
                                            </svg> 
                                            `;
                                    return;
                                }
                              

                                // Mostrar la información en la consola (puedes cambiar esto según tus necesidades
                                const asientosSeleccionados = document.getElementById('asientosSeleccionados') as HTMLTableElement;   
                                const filasExistentes = asientosSeleccionados.getElementsByTagName('tr');
                                const filaExistente = Array.from(filasExistentes).find((fila) => {
                                    return fila.cells[0].textContent!.includes(numeroFila.toString()) && fila.cells[1].textContent!.includes(numeroColumna.toString());
                                });
                                
                                if (filaExistente) {
                                    // Si la fila existe, eliminarla de la tabla
                                    asientosSeleccionados.removeChild(filaExistente);
                                    const indice = asientosSeleccionadosArray.indexOf((numeroFila - 1) * columnas + (numeroColumna - numeroFila) + 1);
                                    asientosSeleccionadosArray.splice(indice, 1);
                                    importe -= 25;
                                    asientosCount--;
                                    cantidad.textContent = "ENTRADAS SELECCIONADAS: " + asientosSeleccionadosImage.length;
                                    precio.textContent = "IMPORTE TOTAL: " + importe + "€";
                                } else {
                                    asientosSeleccionadosArray.push((numeroFila - 1) * columnas + (numeroColumna - numeroFila) + 1);
                                    const nuevaFila = asientosSeleccionados.insertRow();
                                    const filasCell = nuevaFila.insertCell(0);
                                    const columnasCell = nuevaFila.insertCell(1);
                                    filasCell.textContent = numeroFila.toString();
                                    columnasCell.textContent = numeroColumna.toString();
                                    importe = asientosSeleccionadosImage.length * 25;
                                    cantidad.textContent = "ENTRADAS SELECCIONADAS: " + asientosSeleccionadosImage.length;
                                    precio.textContent = "IMPORTE TOTAL: " + importe + "€";
                                    asientosCount=asientosSeleccionadosImage.length;
                                }
                                localStorage.setItem('importe', importe.toString());
                                localStorage.setItem('cantidadAsientos', asientosCount.toString());
                                
                                if(!this.classList.contains('asiento-seleccionado')){
                                  pathBlack = asiento.querySelectorAll('.yellow') as any;
                                  pathBlack.forEach((pathBlack : any) => {
                                    
                                    pathBlack.style.animationName = "dash-inv";
                                      pathBlack.style.animationDuration = "2s";
                                      pathBlack.style.animationDirection = "alternate";
                                    });
                                  setTimeout(() => {
                                this.innerHTML=svgContent;
                              }, 1000);
                            }
                            const selectedSeatsArray: number[][] = Array.from(asientosSeleccionadosImage).map((asiento: Element) => {
                              
                              const numeroAsiento = asiento.querySelector('svg text.asiento-text')?.textContent as string;
                              const numeroFila = parseInt(numeroAsiento.charAt(0));
                              const numeroColumna = parseInt(numeroAsiento.charAt(2));
                              return  [numeroFila, numeroColumna];
                            });
                            storeSelectedSeats(selectedSeatsArray);
                            }
                          }
                        });
                    }
                }
          }
        
        
</script>
<template>
    <main id="desktopPopUp" class="popup-overlay" :style="{ display: show ? 'block' : 'none' }">
        <div class="desktop-popup">
        <section class="group-section">
          <div class="rectangle-div"></div>

          <div class="sala-cine" id="sala-cine"></div>
          <div class="butaca-fila-n32-container">
      
            <table id="filas y columnas">
              <thead>
                <tr>
                  <th>Fila</th>
                  <th>Asiento</th>
                </tr>
              </thead>
              <tbody id="asientosSeleccionados">

              </tbody>
            </table>
          </div>
          <div class="entradas-seleccionadas0-impor-container">
            <p class="n32" id="cantidad">Entradas seleccionadas: 0</p>
            <p class="n32" id="importe">Importe total: 0,00€</p>
          </div>
        </section>
        <div class="master-primary-button9" id="popupmasterPrimaryButton">
          <b class="button-comprar" @click="navigateToTickets">Comprar</b>
        </div>
        <div class="master-primary-button10" id="popupmasterPrimaryButton1">
          <b class="button-cancelar" @click="emits('togglePopUp')">Cancelar</b>
        </div>
      </div>
    </main>
</template>

<style >
.desktop-popup {
    position: relative;
    border-radius: var(--br-31xl);
    background-color: var(--neutral-colors-white);
    width: 1182px;
    height: 579px;
    max-width: 90%;
    max-height: 90%;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--color-whitesmoke-100);
    font-family: var(--font-playfair-display);
}
.group-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 1182px;
  height: 579px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--neutral-colors-white);
  font-family: var(--font-gentium-basic);
}
.rectangle-div {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-gray);
  width: 1182px;
  height: 579px;
  border-radius: var(--br-24xl);
}
.sala-cine {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  top: 40px;
  left: 42.3px;
  border-radius: var(--br-31xl);
  width: 578px;
  height: 533.5px;
  object-fit: cover;
}
.butaca-fila-n32-container {
  position: absolute;
  letter-spacing: 0.1em;
  line-height: 26px;
  text-transform: uppercase;
  display: inline-block;
  top: 76.9px;
  left: 720px;
  white-space: pre-wrap;
  width: 315.3px;
  height: 263px;
}
.entradas-seleccionadas0-impor-container {
  position: absolute;
  letter-spacing: 0.1em;
  line-height: 26px;
  text-transform: uppercase;
  display: inline-block;
  top: 368px;
  left: 706px;
  width: 471px;
  height: 67px;
}
.n32 {
  margin: 0;
}
.master-primary-button9 {
  position: absolute;
  top: 492px;
  left: 919px;
  border-radius: var(--br-11xl);
  background-color: var(--color-maroon);
  width: 237px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  cursor: pointer;
}
.button-comprar {
  position: relative;
  letter-spacing: 0.1em;
  line-height: 26px;
  text-transform: uppercase;
}
.button-comprar:hover {
  color: var(--color-darkgoldenrod);
}
.master-primary-button10 {
  position: absolute;
  top: 492px;
  left: 919px;
  border-radius: var(--br-11xl);
  background-color: var(--color-maroon);
  width: 237px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  cursor: pointer;
  left: 664px;
  background-color: var(--color-goldenrod);
  color: var(--neutral-colors-white);
}
.button-cancelar {
  position: relative;
  letter-spacing: 0.1em;
  line-height: 26px;
  text-transform: uppercase;
}
.button-cancelar:hover {
  color: var(--color-maroon);
}
#sala-cine .asiento{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
#sala-cine .asiento-text{
  font-size: 30px;
}


th {
  color: var(--neutral-colors-white);
  font-family: var(--font-playfair-display);
  width: 100%;
  text-align: center;
}
#sala-cine .asiento-ocupado {
  cursor: not-allowed;
  background-image: url("../assets/asientoocupado.svg");
  background-size: cover;
}

.asiento-text{
  visibility: visible;
}
#asientosSeleccionados{
  text-align: center;
}

@keyframes dash {

    0% {
        fill: #f9f9f9;
        transform: scale(1);
        transform-origin: center center;
    }
    20% {
        fill: #f7ee75;
        transform: scale(1.1);
        transform-origin: center center;
    }
    40% {
        fill: #edd852;
        transform: scale(1.11);
        transform-origin: center center;
    }
    100% {
        fill: #c99f4d; 
        transform: scale(1);
        transform-origin: center center;
    }
}

@keyframes dash-inv {
    0% {
        fill: #c99f4d; 
        transform: scale(1);
        transform-origin: center center;
    }
    20% {
        fill: #edd852;
        transform: scale(1.1);
        transform-origin: center center;
    }
    40% {
        fill: #f7ee75;
        transform: scale(1.11);
        transform-origin: center center;
    }
    100% {
        fill: #f9f9f9;
        transform: scale(1);
        transform-origin: center center;
    }
}
</style>