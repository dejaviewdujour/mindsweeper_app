<template>
  <div id="app">
    <navbar/>
    <home/>
    <customFooter/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    navbar: Navbar,
    home: Home,
    customFooter: Footer
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
