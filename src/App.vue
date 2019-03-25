<template>
  <div id="app">
    <v-app
    style="background: #3A1C71; background:linear-gradient(to top, #1A237E, #0D47A1, #336699);"
  >
    <navbar v-on:changeView="changeView"/>
    <home v-if="currentView === 'home'" v-on:changeView="changeView"/>
    <about v-if="currentView === 'about'" v-on:changeView="changeView"/>
    <download v-if="currentView === 'download'" v-on:changeView="changeView"/>
    <security v-if="currentView === 'security'" v-on:changeView="changeView"/>
    <howDidThisHappened v-if="currentView === 'how'" v-on:changeView="changeView"/>
    <whatAreThisFiles v-if="currentView === 'info'" v-on:changeView="changeView"/>
    <customFooter/>
     </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Download from "./components/Download";
import Security from "./components/Security";
import HowDidThisHappened from "./components/HowDidThisHappened";
import WhatAreThisFiles from "./components/WhatArethisFiles";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    navbar: Navbar,
    home: Home,
    about: About,
    download: Download,
    security: Security,
    howDidThisHappened: HowDidThisHappened,
    whatAreThisFiles: WhatAreThisFiles,
    customFooter: Footer
  },
  data: () => ({
    currentView: "home"
  }),
  methods: {
    changeView: function(value) {
      this.currentView = value;
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.divider {
  width: 95%;
  margin: auto;
}

.text-muted {
  color: #6c757d;
}
</style>
