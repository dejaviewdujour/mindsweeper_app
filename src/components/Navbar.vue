<template>
  <nav>
    <v-toolbar app color="#336699" dark>
      <!--336699  light-blue darken-3-->
      <v-toolbar-side-icon>
        <v-img :src="images.icon"/>
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mind</span>
        <span class="font-weight-light">Sweeper</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$emit('changeView', 'home')">Home</v-btn>
        <v-btn flat @click="$emit('changeView', 'about')">About</v-btn>
        <v-btn flat @click="$emit('changeView', 'download')">Download</v-btn>
        <v-btn flat @click="$emit('changeView', 'security')">Improve Your Security</v-btn>
        <v-btn flat @click="$emit('changeView', 'how')">How Did This Happened?</v-btn>
        <v-btn flat @click="$emit('changeView', 'info')">Info</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    images: { icon: require("@/assets/logo_notext.png") },
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>


<style>
nav {
  margin-bottom: 4rem;
}
</style>
