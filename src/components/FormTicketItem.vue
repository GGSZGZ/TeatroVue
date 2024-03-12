<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useApiStore, pinia } from '../store/api';

  const router = useRouter();
const nombre = ref('');
const apellidos = ref('');
const telefono = ref('');
const correo = ref('');
const direction = ref('');
const payment = ref('');
const usuario =JSON.parse(localStorage.getItem('user')!);
const horario=localStorage.getItem('horario')!;
//asientos
const storedSeats =localStorage.getItem('selectedSeats')!;
const selectedSeats = ref([] as number[][]);
selectedSeats.value = JSON.parse(storedSeats);

const importe=Number(localStorage.getItem('importe'))!;
//put user and tickets
const fechaTicket=localStorage.getItem('fechaTicket');
let schedule : any;

if(horario=='9:30 AM'){
    schedule=fechaTicket!+"0"+horario;
}else{
    schedule=fechaTicket!+horario;
}

const playId = Number(router.currentRoute.value.params.id);



function fetchPutUserTickets(){
    let formattedSchedule = schedule.replace('PM', '');
    formattedSchedule = formattedSchedule.replace('AM', '');
    formattedSchedule=formattedSchedule.trim();
    
    
for(let i=0;i<importe/25;i++){
    let [fila, columna] = selectedSeats.value[i];
    const ticket = {
    ticketRow: fila,
    ticketColumn: columna,
    price: 25,
    scheduleTicket: formattedSchedule,
    userId: usuario.id,
    playId: playId
    };
    
    useApiStore(pinia).fetchPostTicket(ticket);
}
  useApiStore(pinia).fetchPutUserTickets(usuario.id,payment.value,direction.value);
}


if (usuario !== null) {
  nombre.value = usuario.username || '';
  apellidos.value= usuario.surname || '';
  telefono.value = usuario.tlf || '';
  correo.value = usuario.email || '';
  direction.value = usuario.direction || '';
}

const goBack = () => {
  window.history.back();
};

const user=localStorage.getItem('user');

const navigateToSucces = async() => {
    if(nombre.value!='' && apellidos.value!='' && correo.value!='' && direction.value!='' && telefono.value!='' && payment.value!=''){
        
        
    if(user!=JSON.stringify(null) && user !=null){
    fetchPutUserTickets();
    await router.push({ name: 'success' });
    }else{
        alert('Debes iniciar sesión primero')
    }
    }else{
        alert('Faltan campos por completar')
    }
};


</script>
<template>
<div class="title-form">Rellene los siguientes datos:</div>
      <!-- formulario, rehacer -->
      <form class="form" id="form" action="http://a8f4375d87bcb40289a36c70a7186d2d-1138029668.us-east-1.elb.amazonaws.com/tickets" method="POST">
        <div class="form-box">
            <div class="marco-form"></div>
            <div class="background-form"></div>
            <img class="container-mark-right" alt="" src="../assets/container.svg">
            <img class="container-mark-left" alt="" src="../assets/container1.svg">

            <input v-model="nombre" type="text" class="nombre" placeholder="Nombre*" id="Nombre">
            <input v-model="correo" type="text" class="correo" placeholder="ejemplos@gmail.com*" id="Correo">
            <input v-model="telefono" type="text" class="telefono" placeholder="+34 654 158 786*" id="Tlf">
        </div>
        <div class="form-wrapper2">
          <input v-model="apellidos" type="text" class="input7" placeholder="Apellidos*" id="Apellidos">
        </div>
        <div class="form-wrapper3">
          <select v-model="payment" class="input7" id="Payment">
            <option value="" disabled="false" selected="false">Seleccione</option>
            <option value="paypal">Paypal</option>
            <option value="creditCard">Tarjeta de Credito</option>
            <option value="debitCard">Tarjeta de Debito</option>
        
        
          </select><input v-model="direction" type="text" class="input8" placeholder="C/Maria Bendito, 25*" id="Calle">
        </div>
        
        <div class="compra-realizada1" id="compraRealizadaContainer">
          <b @click="goBack" class="button-cancelar">Cancelar</b>
        </div>
        <div class="compra-realizada2" id="compraRealizadaContainer1">
            
          <b class="button-comprar" @click="navigateToSucces">Comprar</b>
        
        </div>

        <b class="mtodo-de-pago">Método de pago</b>
        
        <img class="tarjeta-de-credito-1-icon" alt="" src="../assets/creditIcon.png">

        <img class="telefono-3-icon" alt="" src="../assets/phoneIcon.png">

        <img class="sobre-2-icon" alt="" src="../assets/mailIcon.png">

        <img class="usuario-2-icon" alt="" src="../assets/userIcon.png">

        <img class="usuario-3-icon" alt="" src="../assets/userIcon.png">

        <img class="edificio-2-icon" alt="" src="../assets/buildingIcon.png">
      </form>

</template>
<style scoped>

/* Formulario */

.title-form {
    font-size: var(--font-size-25xl);
    font-family: var(--font-lobster);
    position: absolute;
    top: 1363px;
    left: 10%;
    line-height: 46px;
    display: inline-block;
    width: 1302px;
    height: 77px;
}
.form {
    position: absolute;
    background-color: var(--neutral-colors-white);
    width: 1440px;
    top: 1416px;
    height: 781px;
    overflow: hidden;
    text-align: left;
    font-size: var(--text-single-100-regular-size);
    color: var(--neutral-colors-color-900);
    font-family: var(--text-single-200-regular);
    margin-left: 3.5%;
}
.form-box {
    position: absolute;
    top: 30px;
    left: 68px;
    width: 1305px;
    height: 629px;
}
.marco-form {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--br-6xl);
    background-color: var(--color-maroon);
    width: 1305px;
    height: 629px;
}
.background-form {
    position: absolute;
    top: 24px;
    left: 28px;
    background-color: var(--color-darkgoldenrod);
    width: 1244px;
    height: 573px;
    border-radius: var(--br-6xl);
}
.container-mark-right {
    position: absolute;
    top: 44px;
    left: 1035.5px;
    width: 214.5px;
    height: 274.5px;
}
.container-mark-left {
    position: absolute;
    top: 300px;
    left: 50px;
    width: 205px;
    height: 277.5px;
}
.nombre {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 9.86%;
    right: 69.81%;
    bottom: 81.08%;
    left: 8.74%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.correo {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 23.53%;
    right: 69.81%;
    left: 8.74%;
    bottom: 67.41%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.telefono {
    position: absolute;
    height: 9.06%;
    width: 21.46%;
    top: 9.86%;
    right: 69.81%;
    bottom: 81.08%;
    left: 8.74%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
    top: 23.53%;
    bottom: 67.41%;
    top: 37.2%;
    bottom: 53.74%;
}
.form-wrapper2 {
    position: absolute;
    height: 7.3%;
    width: 19.44%;
    top: 11.78%;
    right: 29.31%;
    bottom: 80.92%;
    left: 51.25%;
}
.input7 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.form-wrapper3 {
    position: absolute;
    height: 7.3%;
    width: 19.44%;
    top: 59.92%;
    right: 68.47%;
    bottom: 32.78%;
    left: 12.08%;
}
.input7 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.input8 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 201%;
    bottom: 500%;
    border-radius: var(--br-31xl);
    background-color: var(--color-whitesmoke-200);
    padding-left: 10px;
}
.compra-realizada1 {
    position: absolute;
    top: 529px;
    left: 781px;
    border-radius: var(--br-11xl);
    background-color: var(--color-goldenrod);
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
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--neutral-colors-white);
    font-family: var(--font-playfair-display);
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
.compra-realizada2 {
    position: absolute;
    top: 529px;
    border-radius: var(--br-11xl);
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
    text-align: center;
    font-size: var(--font-size-9xl);
    font-family: var(--font-playfair-display);
    left: 1046px;
    background-color: var(--color-maroon);
    color: var(--color-whitesmoke-100);
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
.mtodo-de-pago {
    position: absolute;
    top: 492.3px;
    left: 385.3px;
    width: 28.4px;
    height: 14.4px;
    top: 405px;
    left: 177px;
    font-size: var(--headings-h3-size);
    line-height: 34px;
    display: inline-block;
    color: var(--color-gray);
    width: 206px;
    height: 32px;
}
.tarjeta-de-credito-1-icon {
  position: absolute;
  top: 409px;
  left: 377px;
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.telefono-3-icon {
    position: absolute;
    top: 281px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.sobre-2-icon {
    position: absolute;
    top: 281px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
    top: 194px;
}
.usuario-2-icon {
    position: absolute;
    top: 103px;
    left: 142px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.usuario-3-icon {
    position: absolute;
    top: 103px;
    left: 702px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}
.edificio-2-icon {
    position: absolute;
    top: 190px;
    left: 702px;
    width: 32px;
    height: 32px;
    object-fit: cover;
}



</style>