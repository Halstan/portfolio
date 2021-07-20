<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
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
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <v-icon
                    :color="message.color"
                    v-text="message.icon"
                  />
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-text="message.name" />
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider />
            <v-card-text v-text="lorem" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      messages: [
        {
          color: 'green',
          name: 'Vue.js',
          icon: 'mdi-vuejs',
          excerpt: 'Vue.js es un framework que aprendí de manera...'
        },
        {
          color: 'red',
          icon: 'mdi-angular',
          name: 'Angular',
          excerpt: 'Un framework al que le fui agarrando el gusto con el tiempo...'
        },
        {
          color: 'yellow',
          icon: 'mdi-language-javascript',
          name: 'Javascript',
          excerpt: 'Al principio uno de mis dolores de cabeza por lo extraño...'
        },
        {
          color: 'green',
          icon: 'mdi-nodejs',
          name: 'Nodejs',
          excerpt: 'Mi siguiente paso cuando entré al mundo de Js, muy dinámico...'
        },
        {
          color: '#38b0de',
          icon: 'mdi-database',
          name: 'MySql',
          excerpt: 'Una BD sencilla de aprender pero dificil de dominar al 100%...'
        },
        {
          color: 'blue',
          icon: 'mdi-database',
          name: 'PostgreSql',
          excerpt: 'Una BD rápida, versátil y con mucha comunidad detrás de ella...'
        },
        {
          color: 'orange',
          icon: 'mdi-language-java',
          name: 'Java',
          excerpt: 'Mi primer lenguaje de programación aprendido, tengo un...'
        },
        {
          color: 'green',
          icon: 'mdi-leaf',
          name: 'Spring Framework',
          excerpt: 'Es uno de mis frameworks preferidos por lo sencillo...'
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
    }
  }
}
</script>

<style>

</style>
