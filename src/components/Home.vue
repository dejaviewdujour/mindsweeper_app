<template>
  <div>
    <section>
      <v-jumbotron
        :aspect-ratio="16/9"
        dark
        :src="images.background"
        class="overlay"
        max-heigth="5rem"
      >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h1 class="mt-5">Do you know what facebook has on you?</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </section>
    <section>
      <h1>Before you start</h1>
      <hr>
      <p>Before we can use the app, you will need to personally download your Facebook data. This can only be done by you. The files you will download contain valuable information (including some you might not expect). To secure your privacy, please take the following instructions:</p>
    </section>
  </div>
</template>


<script>
export default {
  data: () => ({
    images: { background: require("@/assets/textlogo.png") }
  })
};
</script>


<style>
.overlay {
  background: rgba(0, 0, 0, 0.4);
}
.mt-5 {
  padding-top: 15rem;
}
</style>
