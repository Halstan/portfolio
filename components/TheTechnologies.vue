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
            <v-card-text v-text="message.body" />
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
      messages: []
    }
  },
  created () {
    this.getMessages()
  },
  methods: {
    async getMessages () {
      try {
        const techs = []
        const res = await db.collection('tecnologias').get()
        res.forEach((doc) => {
          const tech = doc.data()
          techs.push(tech)
        })
        this.messages = techs
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
