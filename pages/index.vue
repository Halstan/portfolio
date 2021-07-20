<template>
  <v-row justify="center">
    <v-col cols="3">
      <TheProfile />
    </v-col>
    <v-col cols="9">
      <h1 class="text-center">
        <the-about-me />
      </h1>
      <v-app-bar short>
        <v-tabs>
          <v-tab @click="changeComponent('TheTechnologies')">
            Tecnologías
          </v-tab>
          <v-tab @click="changeComponent('TheEducation')">
            Educación
          </v-tab>
          <v-tab @click="changeComponent('TheProjects')">
            Proyectos
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <keep-alive>
        <v-container>
          <component :is="activeComponent" />
        </v-container>
      </keep-alive>
    </v-col>
  </v-row>
</template>

<script>
import TheTechnologies from '@/components/TheTechnologies.vue'
import TheEducation from '~/components/TheEducation.vue'
import TheProjects from '~/components/TheProjects.vue'
import TheProfile from '~/components/TheProfile.vue'
import TheAboutMe from '~/components/TheAboutMe.vue'

export default {
  components: {
    TheTechnologies,
    TheEducation,
    TheProfile,
    TheProjects,
    TheAboutMe
  },
  data () {
    return {
      activeComponent: 'TheTechnologies'
    }
  },
  computed: {
    isTheEducationActive () {
      return this.activeComponent === 'TheEducation'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>
