<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { ref } from 'vue';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      phone(value:any) {
        if (value?.trim().length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
      email(value:any) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      checkbox(value:any) {
        if (value === '1') return true

        return 'Must be checked.'
      },
      passwd(value:any) {
        if (
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s])/.test(value) &&
          value.length >= 7
        )
          return true

        return 'Password must contain at leats 1 number, 1 letter, 1 symbol & have more than 7 characters'
      },
    },
  })
  const phone = useField('phone')
  const email = useField('email')
  const checkbox = useField('checkbox')
  const passwd = useField('passwd')
  const visible = ref(false);

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>
<template>
    <form @submit.prevent="submit">
        <label for="chk" aria-hidden="true">Login</label>
    
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
        ></v-text-field>
    
        <v-text-field
          v-model="phone.value.value"
          :error-messages="phone.errorMessage.value"
          label="Núm. Teléfono"
          placeholder="+620 XXX XXX"
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
          <v-btn class="me-4" type="submit"> Login </v-btn>
      
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