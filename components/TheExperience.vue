<template>
  <div>
    <v-card v-for="(job, i) of jobs" :key="i" class="mb-2">
      <v-card-text>
        <p class="text-h4 text--primary">
          {{ job.title }}
        </p>
        <p> {{ job.date }} </p>
        <div class="text--primary text-justify text-body-1">
          {{ job.description }}
          <ul v-for="(use, index) of job.uses" :key="index">
            <li>{{ use }}</li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {
          title: 'Freelance',
          description: 'Desarrollo de un sistema para una escuela.',
          date: 'abril del 2021 - mayo del 2021',
          uses: ['Uso de Spring Framework.',
            'Spring data para el manejo de la BD.',
            'Jsp en la parte de las vistas.']
        },
        {
          title: 'Electricidad',
          description: 'Ayudante de electricista.',
          date: '2016 - 2017',
          uses: ['Realizar instalaciones eléctricas.',
            'Atender desperfectos eléctricos.',
            'Apoyar en realizar el mantenimiento eléctrico preventivo de la caja principal.',
            'Comprar implementos.']
        }
      ]
    }
  }
}
</script>

<style>

</style>
