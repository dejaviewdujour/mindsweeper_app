<template>
  <div>
    <v-jumbotron :src="background">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Download the App</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container>
      <v-card>
        <v-card-title>
          <h3 class="display-1">Supported Platforms</h3>
        </v-card-title>
        <v-list>
          <v-list-tile avatar v-for="(item, index) in this.supported" :key="index">
            <v-list-tile-avatar>
              <v-icon>arrow_right</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{item}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <div class="half-circle-spinner spinner" v-if="isLoading">
          <div class="circle circle-1-white"></div>
          <div class="circle circle-2-white"></div>
        </div>
        <v-flex sm6 v-for="(item, index) in releases" :key="index" v-else>
          <v-card>
            <v-card-title>
              <h2>{{item.Key}}</h2>
            </v-card-title>
            <v-card-actions>
              <v-layout row>
                <v-flex sm3></v-flex>
                <v-flex sm6 v-if="item.isLoading">
                  <div class="half-circle-spinner" style="margin: auto">
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                  </div>
                </v-flex>
                <v-flex sm6 v-else>
                  <v-btn round flat outline block color="indigo" @click="requestLink(item)">Download</v-btn>
                </v-flex>
                <v-flex sm3></v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data: () => ({
    isLoading: true,
    background: require("@/assets/backgrounds/download.jpg"),
    supported: [
      "Mac OS",
      "Windows 64 bit",
      "Linux (experimental)",
      "Android VR (only for Daydream ready devices)"
    ],
    releases: []
  }),
  mounted() {
    this.listObjects();
  },
  methods: {
    listObjects: async function() {
      const { data } = await axios({
        method: "get",
        url: "/api/releases",
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.releases = data.releases.map(element => {
        element.isLoading = false;
        return element;
      });
      this.isLoading = false;
    },
    requestLink: async function(item) {
      console.log("this is the requested key", item);
      item.isLoading = true;
      const { data } = await axios({
        method: "get",
        url: `/api/releases/${item.Key}`,
        headers: {
          "Content-Type": "application/json"
        }
      });
      window.location = data.url;
      item.isLoading = false;
    }
  }
};
</script>

<style scoped>
.spinner {
  position: fixed;
  z-index: 999;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #336699;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #336699;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

.half-circle-spinner .circle.circle-1-white {
  border-top-color: #ffffff;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2-white {
  border-bottom-color: #ffffff;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
