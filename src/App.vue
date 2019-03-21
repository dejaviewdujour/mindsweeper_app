<template>
  <div id="app">
    <navbar v-on:changeView="changeView"/>
    <home v-if="currentView === 'home'" v-on:changeView="changeView"/>
    <about v-if="currentView === 'about'" v-on:changeView="changeView"/>
    <download v-if="currentView === 'download'" v-on:changeView="changeView"/>
    <customFooter/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    navbar: Navbar,
    home: Home,
    about: About,
    download: Download,
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
</style>
