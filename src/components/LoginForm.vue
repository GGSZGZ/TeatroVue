<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { useApiStore, pinia } from '../store/api';
  const existingUser = ref(false);

  //Home
  const router = useRouter();
  const navigateToHome = async() => {
    if(existingUser.value==true){
      
      localStorage.setItem('reloadIndicator', 'true');
        router.push({ name: 'home' });
    }
  };

  function proveExistingUser(users:any,values : any){
    users.forEach((element:any) => {
      if((element.email === values.emailTlf || element.tlf==values.emailTlf) && element.passwd === values.passwd){
        existingUser.value=true;
        useApiStore().setLoggedInUser(element);
        if(element.email.indexOf('@svalero') !==-1){
          localStorage.setItem('admin', "true");
        }else{
          localStorage.setItem('admin', "false");
        }
      } 
    });

    if(existingUser.value==false){
        alert('Este usuario no se ha registrado');
      }else{
        handleReset();
        alert('El usuario se ha logeado correctamente');
        navigateToHome();
      }
    }


  const fetchGetUser = async (values:any) => {
    try {
     const users= await useApiStore(pinia).fetchUsers();
     proveExistingUser(users,values);
    } catch (err) {
      console.error(err);
    }
  };

  

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      emailTlf(value:any) {
        if(value && value.indexOf('@') !==-1){
          if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        } else{
          if (value?.trim().length == 9 && /[0-9-]+/.test(value)) return true

          return 'Phone number needs to be 9 digits.'
        }
        
      },
      checkbox(value:any) {
        if (value === '1') return true

        return 'Must be checked.'
      },
      passwd(value:any) {
        if (
          value?.length >= 7
        )
          return true

        return 'Password must contain at leats 1 number, 1 letter, 1 symbol & have more than 7 characters'
      },
    },
  })
  const emailTlf = useField('emailTlf')
  const checkbox = useField('checkbox')
  const passwd = useField('passwd')
  const visible = ref(false);

  const submit = handleSubmit(values => {
    existingUser.value=false;
    fetchGetUser(values);
  })
</script>
<template>
    <form @submit.prevent="submit">
        <label for="chk" aria-hidden="true">Login</label>
    
        <v-text-field
          v-model="emailTlf.value.value"
          :error-messages="emailTlf.errorMessage.value"
          label="Correo electrónico/Núm.Teléfono"
          placeholder="correo@ejemplo.com/+620 XXX XXX"
        ></v-text-field>
    
        <v-text-field
          v-model="passwd.value.value"
          :error-messages="passwd.errorMessage.value"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          label="Contraseña"
          placeholder="Pon tu contraseña"
          @click:append-inner="visible = !visible"
        ></v-text-field>
    
        <v-checkbox
          v-model="checkbox.value.value"
          :error-messages="checkbox.errorMessage.value"
          value="1"
          label="Acepto los Términos de Política y Privacidad"
          type="checkbox"
        >
        </v-checkbox>
        <div class="buttons">
          <v-btn class="me-4" type="submit">Login</v-btn>
      
          <v-btn @click="handleReset" class="clear"> Clear </v-btn>
        </div>
      </form>
</template>

<style scoped>
form{
  margin-top: 40px;
  margin-bottom: 20px;
  width: 500px;
  max-width: 400px; /* Ancho máximo del formulario */
  padding: 20px;
  background-image: linear-gradient(var(--color-gray), var(--color-goldenrod)); 
  color: white;
  border-radius: 50px 50px 5px 5px;
  height: 650px;
}
label{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--color-goldenrod);
  font-size: var(--font-size-25xl);
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
  margin-bottom: 40px;
}
.buttons{
  display: flex;
  justify-content: center;
}
.me-4{
  background: linear-gradient(to right, #99e380, #56ccf2); /* Cambia los colores según tu preferencia */
  color: white;
}
.clear{
  background: linear-gradient(to right, #450054, #db0606); /* Cambia los colores según tu preferencia */
  color: white;
}
</style>