<template>
  <div>
    <section>
      <v-container>
        <v-card flat class="transparent">
          <v-img :src="images.background"/>
          <v-card-title primary-title class="justify-center">
            <div>
              <h4 class="headline m-auto" style="color: white">Do you know what Facebook has on you?</h4>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </section>
    <section>
      <v-carousel height="700">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </section>
    <section>
      <v-container>
        <v-card color="blue lighten-5">
          <v-card-text>
            <div class="subheading" style="text-align: justify">{{ text.intro }}</div>
          </v-card-text>
        </v-card>
      </v-container>

      <v-container>
        <v-card color="blue lighten-5">
          <v-card-title primary-title>
            <h3 class="display-1">Download</h3>
          </v-card-title>
          <v-layout>
            <v-flex md8>
              <v-card-text>
                <p
                  class="subheading"
                  style="text-align: justify"
                >1. Visit this link and download the file for the system you will be using it on.</p>
                <p
                  class="subheading"
                  style="text-align: justify"
                >2. If using MacOS, double click the file in Finder.</p>
                <p
                  class="subheading"
                  style="text-align: justify"
                >3. If using Windows, right click on it and select “Extract All” , and then follow the instructions.</p>
              </v-card-text>
            </v-flex>
            <v-flex md4>
              <v-card-actions>
                <v-btn
                  flat
                  outline
                  round
                  color="indigo"
                  @click="$emit('changeView', 'downloadReleases')"
                >Download</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>

      <v-container>
        <v-card color="blue lighten-5">
          <v-card-title primary-title>
            <h3 class="display-1">Before you start</h3>
          </v-card-title>
          <v-divider class="divider"/>
          <v-card-text>
            <div class="subheading" style="text-align: justify">{{ text.start }}</div>
          </v-card-text>
          <v-container>
            <v-list>
              <v-list-tile avatar v-for="(item, index) in text.listStart" :key="index">
                <v-list-tile-avatar>
                  <v-icon>arrow_right</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{item}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-container>
        </v-card>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm6>
            <v-card color="blue lighten-5">
              <v-card-title primary-title>
                <h3 class="display-1">Download your Facebook data</h3>
              </v-card-title>
              <v-divider class="divider"/>
              <!-- <v-container>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>{{item}}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-container>-->
              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  outline
                  color="indigo"
                  round
                  class="mb-2"
                  @click="$emit('changeView', 'download')"
                >Learn How</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card color="blue lighten-5" class="ml-2">
              <v-card-title primary-title>
                <h3 class="display-1">Additional Resources</h3>
              </v-card-title>
              <v-divider class="divider"/>

              <v-card-text>
                <div
                  class="subheading"
                  style="text-align: justify"
                >Here are some resources explaining what's going on:</div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  outline
                  block
                  color="indigo"
                  round
                  @click="$emit('changeView', 'info')"
                >What are these files?</v-btn>
              </v-card-actions>

              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  outline
                  block
                  color="indigo"
                  round
                  @click="$emit('changeView', 'how')"
                >How did this happen?</v-btn>
              </v-card-actions>

              <v-card-actions class="justify-center">
                <v-btn
                  flat
                  outline
                  block
                  color="indigo"
                  round
                  class="mb-2"
                  @click="$emit('changeView', 'about')"
                >Who created this?</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>


<script>
export default {
  data: () => ({
    images: { background: require("@/assets/textlogowhite.png") },
    text: {
      intro:
        "Online security and privacy has never been more important. Facebook gathers a lot of personal data that advertisers can have access to. Mindsweeper helps you visualize your complex Facebook data in 3D and educates you on how this has happened and what you can do about it. Note that this application cannot store your information and is safe to use as long as you are safe with your data.",
      start:
        "Before we can use the app, you will need to personally download your Facebook data. This can only be done by you. The files you will download contain valuable information (including some you might not expect). To secure your privacy, please take the following instructions:",
      listStart: [
        "Use a trusted network such as your secured home network. Consider the risk of using a public WiFi network.",
        "Make sure to use a virus/malware free laptop. Run a virus scan and clean before you use this app."
      ]
    },
    items: [
      {
        src: require("@/assets/carousel/01.jpg")
      },
      {
        src: require("@/assets/carousel/02.jpg")
      },
      {
        src: require("@/assets/carousel/03.jpg")
      },
      {
        src: require("@/assets/carousel/04.jpg")
      },
      {
        src: require("@/assets/carousel/05.jpg")
      },
      {
        src: require("@/assets/carousel/06.jpg")
      }
    ]
  })
};
</script>


<style>
.transparent {
  /* background-color: white !important; */
  opacity: 1;
  border-color: transparent !important;
}
.overlay {
  background: rgba(0, 0, 0, 0.4);
}
.mt-5 {
  padding-top: 15rem;
}

.text-white {
  color: white;
}
</style>
