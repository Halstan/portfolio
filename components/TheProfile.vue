<template>
  <v-container>
    <p class="text-center text-h5 text-lg-h2 text-md-h2">
      Perfil
    </p>
    <v-img
      class="mt-2"
      lazy-src="https://i1.wp.com/vectorified.com/images/no-profile-picture-icon-21.jpg"
      src="https://avatars.githubusercontent.com/u/66536950?v=4"
    />
    <v-list class="mt-2">
      <p class="ml-4 text-center">
        Datos de contacto
      </p>
      <v-list-item-group>
        <v-list-item v-for="(contac, index) in contacs" :key="index" disabled>
          <v-list-item-icon>
            <v-icon> {{ contac.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-subtitle-1">
            {{ contac.content }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list class="mt-2">
      <p class="ml-4 text-center">
        Idiomas
      </p>
      <v-list-item-group>
        <v-list-item v-for="(lang, i) in languages" :key="i" disabled>
          <v-list-item-icon>
            <v-icon> {{ lang.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-subtitle-1">
            {{ lang.content }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      contacs: [
        {
          icon: 'mdi-email',
          content: 'enzoarauco@gmail.com'
        },
        {
          icon: 'mdi-phone',
          content: '+51 932 837 355'
        },
        {
          icon: 'mdi-map-marker',
          content: 'Sector 3, Grupo 20, Manzana J, Lote 22 - Villa el Salvador'
        }
      ],
      languages: [
        {
          icon: 'mdi-flag',
          content: 'Inglés'
        }
      ]
    }
  }
}
</script>

<style>

</style>
