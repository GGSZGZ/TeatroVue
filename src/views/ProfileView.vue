<script setup lang="ts">
import { useField } from 'vee-validate';
import { onMounted, ref } from 'vue';
import { useApiStore,pinia } from '@/store/api';
const plays = ref([]);
//FETCHS
const userLS = JSON.parse(localStorage.getItem('user')!);
function fetchPutUserAll(user:any){
    user.username=name.value.value;
    user.surname=surname.value.value ;
    user.passwd= passwd.value.value;
    user.direction=direction.value.value;
    user.email=email.value.value;
    user.tlf= Number(tlf.value.value);

    localStorage.setItem('user', JSON.stringify(user))
    user = JSON.parse(localStorage.getItem('user')!);

    useApiStore(pinia).fetchPutUserAll(Number(user.id), user);
    alert('Cambios guardados correctamente');
}
const fetchPlays = async () => {
  try {
    plays.value = await useApiStore(pinia).fetchPlays();
    viewTickets();
  } catch (err) {
    console.error(err);
  }
};
fetchPlays();

//HTML
const name = useField('name');
const surname = useField('surname');
const passwd = useField('passwd');
const direction = useField('direction');
const email = useField('email');
const tlf = useField('tlf');
const visible = ref(false);

if(userLS!=null){
    name.value.value = userLS.username;
    surname.value.value = userLS.surname;
    passwd.value.value = userLS.passwd;
    direction.value.value = userLS.direction;
    email.value.value = userLS.email;
    tlf.value.value = userLS.tlf;
}

function viewTickets(){
    const userTickets = document.getElementById('ticketsList')!;
    function renderTickets() {
        userTickets.innerHTML = '';

        userLS.tickets.forEach((ticket:any) => {
          const row = document.createElement('tr');
          row.id = `row-${ticket.id}`; 
          row.innerHTML = `
            <td style="border: 1px solid black; padding: 5px; text-align: center;">${ticket.ticketRow}</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">${ticket.ticketColumn}</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">${ticket.price}</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">${ticket.scheduleTicket.replace('T', ' ').slice(0, -3)}</td>`
            plays.value.forEach((element:any) =>{
                if(element.id == ticket.playId){
                    row.innerHTML +=  `<td style="border: 1px solid black; padding: 5px; text-align: center;">${element.title}</td>`;
                }
            });
          userTickets.appendChild(row);
        });
    }
    renderTickets()
}



</script>
<template>
    <div class="heading">
        <div class="round-container">
            <img src="/src/assets/userIcon.png" class="profile-picture">
        </div>
        <h1 class="title">Personal Information</h1>
    </div>
    <hr class="line">
    <div class="container">
    <div class="row">
        <div class="column">
            <v-text-field
            v-model="name.value.value"
            :counter="10"
            label="Nombre"
            placeholder="Paco"
            ></v-text-field>
        </div>
        <div class="column">
            <v-text-field
            v-model="surname.value.value"
            label="Apellidos"
            ></v-text-field>
        </div>
        <div class="column">
            <v-text-field
            v-model="passwd.value.value"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            label="Contraseña"
            placeholder="Pon tu contraseña"
            @click:append-inner="visible = !visible"
            ></v-text-field>
        </div>
        <div class="column">
            <v-text-field
            v-model="direction.value.value"
            label="Dirección"
            ></v-text-field>
        </div>
        <div class="column">
            <v-text-field
            v-model="email.value.value"
            label="Email"
            ></v-text-field>
        </div>
        <div class="column">
            <v-text-field
            v-model="tlf.value.value"
            label="Teléfono"
            ></v-text-field>
        </div>
        <div class="column">
            <v-btn class="me-4" @click="fetchPutUserAll(userLS)"> Guardar </v-btn>
        </div>
    </div>
    <div class="row">
        <div class="column">
            <h2>Tickets Comprados</h2>
        </div>
    </div>
        <table>
            <thead>
                <tr>
                    <th>Fila</th>
                    <th>Asiento</th>
                    <th>Precio</th>
                    <th>Día y Hora</th>
                    <th>Obra</th>
                </tr>
            </thead>
            <tbody id="ticketsList">

            </tbody>
        </table>
</div>

</template>
<style scoped>
.heading{
    display: flex;
    align-items: center;
    margin-top: 4%;
    margin-left: 7%;
    margin-bottom: 2%;
}
.round-container{
    display: flex;
    justify-content: center;
    border: 1px ;
    margin-right: 40px;
    border-radius: 50%;
    box-shadow: 0 0 25px 2px var(--color-maroon);
    background-color: var(--color-goldenrod);
}
.profile-picture{
    margin: 10px;
    width: 30px;
}
.line{
    width: 90%;
    margin-left: 5%;
    border: 2px solid var(--color-gray);
    color: var(--color-gray);
    margin-bottom: 4%;
}
h1, h2{
    font-family: var(--font-lobster);
    color: var(--color-darkgoldenrod);
}
.container {
    width: 90%;
    margin: 0 auto;
}

.row {
    display: flex;
    margin-bottom: 10px;
}

.column {
    flex: 1;
    padding: 0 10px;
}

input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
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
    th {
      width: fit-content; 
      background-color: var(--color-maroon);
      color: var(--color-goldenrod);
      text-align: center;
      font-family: var(--font-lobster);
      font-size: var(--headings-h3-size);
    }
    #ticketsList td{
      margin-bottom: 50px;
      border: 1px solid #000;
    }
    #ticketsList{
        font-family: var(--font-gentium-basic);
        font-size: var(--font-size-xl);
    }
.me-4{
    top: 10%;
    color: white;
    background: linear-gradient(to right, var(--color-goldenrod), var(--color-maroon)); /* Cambia los colores según tu preferencia */
}
</style>
