<template>
  <v-row>
    <v-col cols="1" />
    <v-col cols="10">
      <p class="text-h5 text-lg-h2 text-md-h2 text-center">
        Contacto
      </p>
      <v-form @submit.prevent="sendEmail">
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" label="Nombre" />
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="email" label="Correo" />
          </v-col>
        </v-row>
        <v-textarea v-model="message" label="Cuerpo" />
        <v-btn block color="success" type="submit">
          Enviar
        </v-btn>
      </v-form>
      <v-snackbar v-model="snack" timeout="1500" shaped :color="color">
        {{ text }}
      </v-snackbar>
    </v-col>
    <v-col cols="1" />
  </v-row>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data () {
    return {
      message: '',
      email: '',
      name: '',
      snack: true,
      text: 'Correo enviado exitosamente',
      color: 'success'
    }
  },
  methods: {
    async sendEmail () {
      try {
        await emailjs.send('service_z0irc4d', 'template_ljf9w8b', {
          message: this.message,
          name: this.name,
          email: this.email
        }, 'user_7iuxjMZn36AmYBEmiDQpk')
        // eslint-disable-next-line no-console
        this.snack = true
        this.message = ''
        this.email = ''
        this.name = ''
      } catch (error) {
        // eslint-disable-next-line no-console
        this.snack = true
        this.text = `Error al enviar el correo ${error.text}`
        this.color = 'error'
      }
    }
  }

}
</script>

<style>

</style>
