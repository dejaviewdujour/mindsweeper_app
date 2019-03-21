<template>
  <div>
    <v-jumbotron
      :gradient="gradient"
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Mortar & Pestle</h3>
            <h5 class="display-1">Meet the team</h5>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container v-for="(item, index) in team" :key="index">
      <v-card>
        <div v-if="index === 'ian' || index === 'yuma'">
          <v-layout>
            <v-flex md8 sm12>
              <v-card-title primary-title>
                <h3 class="display-1">{{item.name}}</h3>
              </v-card-title>
              <v-card-text>
                <div class="subheading text-justify">{{item.description}}</div>
              </v-card-text>
            </v-flex>
            <v-flex md4 sm12>
              <v-img :src="item.img" height="15rem"/>
            </v-flex>
          </v-layout>
        </div>
        <div v-else>
          <v-layout>
            <v-flex md4 sm12>
              <v-img :src="item.img" height="15rem"/>
            </v-flex>
            <v-flex md8 sm12>
              <v-card-title primary-title>
                <h3 class="display-1">{{item.name}}</h3>
              </v-card-title>
              <v-card-text>
                <div class="subheading text-justify">{{item.description}}</div>
              </v-card-text>
            </v-flex>
          </v-layout>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",
    team: {
      carlos: {
        name: "Carlos Castro",
        img: require("@/assets/team/carlos.jpg"),
        description:
          "3+ year experience in a software consultancy for financial institutions using technologies such as: Java, Actionscript, JavaScript, Application Servers (Glassfish, Jboss, Weblogic), Databases (Oracle, MSSQL)."
      },
      ian: {
        name: "Ian McClerin",
        img: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        description:
          "Professional Filmmaker with 10+ years experience and CEO of San Francisco based production company."
      },
      toshy: {
        name: "Toshiya Sasaki",
        img: require("@/assets/team/toshy.jpg"),
        description:
          "Systems engineer in a systems integrator with 10+ years experience using Application Framework (Spring framework, SAStruts)."
      },
      yuma: {
        name: "Yuma Sumi",
        img: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        description:
          "Professional ballet dancer with an international career aiming to become an entrepreneur to create a support system for athletes and artists using technology."
      }
    }
  })
};
</script>

<style>
</style>
