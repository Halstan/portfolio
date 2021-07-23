<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(project, i) in projects"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-text="project.name" />
              </v-col>

              <v-col
                v-if="project.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                {{ project.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider />
            <v-card-text v-text="project.body" />
            <v-card-text>
              <p class="text-subtitle-1">
                Repositorios:
              </p>
              <ul v-for=" (repo, index) of project.repos" :key="index">
                <li> <a :href="repo" target="_blanck"> {{ repo }} </a> </li>
              </ul>
            </v-card-text>
            <v-card-text>
              <p class="text-subtitle-1">
                Tecnologías
              </p>
              <ul v-for="(tech, index) in project.techs" :key="index">
                <li>
                  <v-icon :color="tech.color">
                    {{ tech.icon }}
                  </v-icon>
                  {{ tech.name }}
                </li>
              </ul>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  data () {
    return {
      projects: []
    }
  },
  created () {
    this.getProjects()
  },
  methods: {
    async getProjects () {
      try {
        const projects = []
        const res = await db.collection('proyectos').get()
        res.forEach((doc) => {
          const project = doc.data()
          projects.push(project)
        })
        this.projects = projects
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
