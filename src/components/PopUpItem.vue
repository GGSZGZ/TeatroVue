<script setup lang="ts">
import { defineProps, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: Boolean
});
const emits = defineEmits(['togglePopUp', 'navigateToTickets'])
    onMounted(() => {
        const popup = document.getElementById("desktopPopUp")!;
        const popupStyle = popup.style;
        if (popupStyle) {
            popupStyle.position = "fixed";
            popupStyle.top = '50%';
            popupStyle.left = '50%';
            popupStyle.transform = "translate(-50%, -50%)"
            popupStyle.display = "flex";
            popupStyle.zIndex = '9999';
            popupStyle.backgroundColor = "rgba(128, 128, 128, 0.7)";
            popupStyle.alignItems = "center";
            popupStyle.justifyContent = "center";
        }
        popup.setAttribute("closable", "");

        const onClick = popup.onclick || function (e: MouseEvent) {
        if (e.target === popup && popup.hasAttribute("closable")) {
            popupStyle.display = "none";
            emits('togglePopUp');
        }
        };

        popup.addEventListener("click", onClick);

        crearSalaDeCine(6,6);

        
    });



    // Función para crear la sala de cine
    let importe: number = 0;
        let cantidadAsientos: number;
        let asientosOcupados: number[] = [];
        function crearSalaDeCine(filas: number, columnas: number): void {
            const salaCine = document.getElementById('sala-cine') as HTMLElement;
            const cantidad = document.getElementById('cantidad') as HTMLElement;
            const precio = document.getElementById('importe') as HTMLElement;
            
            const asientosSeleccionadosArray: number[] = [];
            
            if(salaCine.children.length === 0){
                for (let fila = 1; fila <= filas; fila++) {
                    for (let columna = 1; columna <= columnas; columna++) {
                        const asiento = document.createElement('div');
                        asiento.classList.add('asiento');
                        asiento.textContent = fila + '-' + columna;

                        // Aplicar estilos al asiento
                        asiento.style.width = '50px';
                        asiento.style.height = '50px';
                        asiento.style.display = 'flex';
                        asiento.style.alignItems = 'center';
                        asiento.style.justifyContent = 'center';
                        asiento.style.fontSize = '14px';
                        asiento.style.cursor = 'pointer';
                        asiento.style.backgroundImage = 'url("../src/assets/asiento.svg")';
                        asiento.style.backgroundSize = 'cover';

                        const indiceAsiento = (fila - 1) * columnas + columna;

                        if (asientosOcupados.includes(indiceAsiento)) {
                            asiento.classList.add('asiento-ocupado');
                        }

                        salaCine.appendChild(asiento);

                        asiento.addEventListener('click', function () {
                            if (!this.classList.contains('asiento-ocupado')) {
                                this.classList.toggle('asiento-seleccionado');

                                // Extraer el número de fila y columna del texto del asiento
                                const numeroAsiento = this.textContent as string;
                                const numeroFila = parseInt(numeroAsiento.charAt(0));
                                const numeroColumna = parseInt(numeroAsiento.charAt(2));

                                const asientosSeleccionadosImage = document.querySelectorAll('.asiento-seleccionado');
                                if (asientosSeleccionadosImage.length > 6) {
                                    alert('¡Ya has seleccionado el máximo de 6 asientos!');
                                    this.classList.remove('asiento-seleccionado'); // Deshacer la selección del asiento actual
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
                                }
                                const cantidadAsientos = asientosSeleccionadosImage.length;
                                console.log(asientosSeleccionadosArray);
                                localStorage.setItem('importe', importe.toString());
                                localStorage.setItem('cantidadAsientos', cantidadAsientos.toString());
                                localStorage.setItem('asientosArray', JSON.stringify(asientosSeleccionadosArray));
                            }
                        });
                    }
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
          <b class="button-comprar" @click="emits('navigateToTickets')">Comprar</b>
        </div>
        <div class="master-primary-button10" id="popupmasterPrimaryButton1">
          <b class="button-cancelar" @click="emits('togglePopUp')">Cancelar</b>
        </div>
      </div>
    </main>
</template>

<style scoped>
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
  left: 752.4px;
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

th {
  color: var(--neutral-colors-white);
  font-family: var(--font-playfair-display);
  width: 50%;
  text-align: left;
}
</style>