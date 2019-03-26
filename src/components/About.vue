<template>
  <div>
    <v-jumbotron
      :gradient="gradient" dark :src="background">
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
              <v-divider class="divider"/>
              <v-card-text>
                <div class="subheading text-justify">{{item.description}}</div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  v-for="(element, pos) in item.socials"
                  :key="pos"
                  v-html="icons[element.name]"
                  :href="element.link"
                ></v-btn>
              </v-card-actions>
            </v-flex>
            <v-flex md4 sm12>
              <v-img :src="item.img" height="17rem"/>
            </v-flex>
          </v-layout>
        </div>
        <div v-else>
          <v-layout>
            <v-flex md4 sm12>
              <v-img :src="item.img" height="17rem"/>
            </v-flex>
            <v-flex md8 sm12>
              <v-card-title primary-title>
                <h3 class="display-1">{{item.name}}</h3>
              </v-card-title>
              <v-divider class="divider"/>
              <v-card-text>
                <div class="subheading text-justify">{{item.description}}</div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  v-for="(element, pos) in item.socials"
                  :key="pos"
                  v-html="icons[element.name]"
                  :href="element.link"
                ></v-btn>
              </v-card-actions>
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
    background: require("@/assets/backgrounds/mortar.jpg"),
    gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
    team: {
      carlos: {
        name: "Carlos Castro",
        img: require("@/assets/team/carlos.jpg"),
        socials: [
          { name: "github", link: "https://www.github.com/zero4994" },
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/carlos-v-castro/"
          },
          { name: "twitter", link: "https://twitter.com/chuck_vc" }
        ],
        description:
          "3+ year experience in a software consultancy for financial institutions using technologies such as: Java, Actionscript, JavaScript, Application Servers (Glassfish, Jboss, Weblogic), Databases (Oracle, MSSQL)."
      },
      ian: {
        name: "Ian McClerin",
        img: require("@/assets/team/ian.jpg"),
        socials: [
          { name: "github", link: "https://github.com/dejaviewdujour" },
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/ian-mcclerin-a0827737/"
          },
          { name: "nonquixote", link: "https://nonquixote.com/" }
        ],
        description:
          "Professional Filmmaker with 10+ years experience and CEO of San Francisco based production company."
      },
      toshy: {
        name: "Toshiya Sasaki",
        img: require("@/assets/team/toshy.jpg"),
        socials: [
          { name: "github", link: "https://github.com/toshyss" },
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/toshyss/"
          }
        ],
        description:
          "Systems engineer in a systems integrator with 10+ years experience using Application Framework (Spring framework, SAStruts)."
      },
      yuma: {
        name: "Yuma Sumi",
        img: require("@/assets/team/yuma.jpg"),
        socials: [
          { name: "github", link: "https://github.com/y-yeah" },
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/yuma-sumi-15b8129a/"
          },
          { name: "twitter", link: "https://twitter.com/yumayeah" }
        ],
        description:
          "Professional ballet dancer with an international career aiming to become an entrepreneur to create a support system for athletes and artists using technology."
      }
    },
    icons: {
      github: `<i class="fab fa-github fa-2x"></i>`,
      linkedin: `<i class="fab fa-linkedin fa-2x"></i>`,
      twitter: `<i class="fab fa-twitter fa-2x"></i>`,
      nonquixote: `<i class="fab fa-vimeo-v fa-2x"></i>`
    }
  })
};
</script>

<style>
</style>
