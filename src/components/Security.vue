<template>
  <div>
    <v-jumbotron :gradient="gradient" dark :src="background">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">How can I improve my Facebook security?</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/backgrounds/security.jpg")
  })
};
</script>

<style>
</style>
