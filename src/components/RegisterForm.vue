<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { ref } from 'vue';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name(value:any) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      surname(value:any) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
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
  const name = useField('name')
  const surname = useField('surname')
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
        <label for="chk" aria-hidden="true">Register</label>
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Nombre"
          placeholder="Paco"
        ></v-text-field>
    
        <v-text-field
          v-model="surname.value.value"
          :counter="40"
          :error-messages="surname.errorMessage.value"
          label="Apellidos"
          placeholder="Fernandez Domingo"
        ></v-text-field>
    
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
          <v-btn class="me-4" type="submit"> Register </v-btn>
      
          <v-btn @click="handleReset"> Clear </v-btn>
        </div>
      </form>
</template>
<style scoped>
form{
  margin-bottom: 20px;
  width: 500px;
  max-width: 400px; /* Ancho máximo del formulario */
  padding: 20px;
  background-image: linear-gradient(var(--color-goldenrod), #1B1339);
  color: white;
  /* backdrop-filter: blur(16px); */
  height: 700px;
}
label{
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  color: var(--color-gray);
  font-size: var(--font-size-25xl);
  font-weight: bold;
  cursor: pointer;
  transition: .5s ease-in-out;
}
.buttons{
  display: flex;
  justify-content: center;
}
</style>