<template>
  <nav>
    <v-toolbar app color="#336699" dark>
      <!--336699  light-blue darken-3-->
      <v-avatar>
        <v-img :src="images.icon" class="icon" @click="$emit('changeView', 'home')"/>
      </v-avatar>
      <v-img :src="images.title" class="title-image" @click="$emit('changeView', 'home')"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="(item, index) in buttons"
          :key="index"
          @click="$emit('changeView', item.view)"
        >{{item.title}}</v-btn>
        <!-- <v-btn flat @click="$emit('changeView', 'download')">Get Your Data</v-btn>
        <v-btn flat @click="$emit('changeView', 'downloadReleases')">Download The App</v-btn>
        <v-btn flat @click="$emit('changeView', 'info')">What Are These Files?</v-btn>
        <v-btn flat @click="$emit('changeView', 'security')">Improve Your Security</v-btn>
        <v-btn flat @click="$emit('changeView', 'how')">Resources</v-btn>
        <v-btn flat @click="$emit('changeView', 'about')">About Us</v-btn>-->
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(item, index) in this.buttons" :key="index">
            <v-btn flat block @click="$emit('changeView', item.view)">{{item.title}}</v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    images: {
      icon: require("@/assets/mindsweeper_logo_notext.png"),
      title: require("@/assets/textlogowhite.png")
    },
    buttons: [
      { title: "Home", view: "home" },
      { title: "Get Your Data", view: "download" },
      { title: "Download The App", view: "downloadReleases" },
      { title: "What Are These Files?", view: "info" },
      { title: "Improve Your Security", view: "security" },
      { title: "Resources", view: "how" },
      { title: "About Us", view: "about" }
    ]
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
