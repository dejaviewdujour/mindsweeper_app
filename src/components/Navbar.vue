<template>
  <nav>
    <v-toolbar app color="#336699" dark>
      <!--336699  light-blue darken-3-->
      <v-avatar>
        <v-img :src="images.icon" class="icon"/>
      </v-avatar>
      <v-img :src="images.title" class="title-image" @click="$emit('changeView', 'home')"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$emit('changeView', 'home')">Home</v-btn>
        <v-btn flat @click="$emit('changeView', 'download')">Get Your Data</v-btn>
        <v-btn flat @click="$emit('changeView', 'downloadReleases')">Download The App</v-btn>
        <v-btn flat @click="$emit('changeView', 'info')">What Are These Files?</v-btn>
        <v-btn flat @click="$emit('changeView', 'security')">Improve Your Security</v-btn>
        <v-btn flat @click="$emit('changeView', 'how')">Resources</v-btn>
        <v-btn flat @click="$emit('changeView', 'about')">About Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    images: {
      icon: require("@/assets/mindsweeper_logo_notext.png"),
      title: require("@/assets/textlogowhite.png")
    }
  })
};
</script>


<style>
nav {
  margin-bottom: 4rem;
}

.title-image {
  max-width: 13%;
  height: auto;
}
</style>
