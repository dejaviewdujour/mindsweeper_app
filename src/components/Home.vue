<template>
  <div>
    <section>
      <v-container>
        <v-card flat>
          <v-img :src="images.background"/>
          <v-card-title primary-title>
            <div>
              <h4 class="headline mb-0">Do you know what facebook has on you?</h4>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-card color="blue lighten-5">
          <v-card-title primary-title>
            <div>
              <h3 class="display-1 mb-4">Before you start</h3>
              <div class="subheading" style="text-align: justify">{{ text.start }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </section>
  </div>
</template>


<script>
export default {
  data: () => ({
    images: { background: require("@/assets/textlogo.png") },
    text: {
      start:
        "Before we can use the app, you will need to personally download your Facebook data. This can only be done by you. The files you will download contain valuable information (including some you might not expect). To secure your privacy, please take the following instructions:"
    },
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
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
