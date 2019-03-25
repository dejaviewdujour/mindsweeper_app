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
        <v-flex sm6 v-for="(item, index) in releases" :key="index">
          <v-card>
            <v-card-title>
              <h2>{{item.Key}}</h2>
            </v-card-title>
            <v-card-actions>
              <v-layout row>
                <v-flex sm6>
                  <v-btn
                    round
                    flat
                    outline
                    block
                    color="indigo"
                    @click="requestLink(item.Key)"
                  >Request Link</v-btn>
                </v-flex>
                <v-flex sm6 v-if="item.url">
                  <v-btn round flat outline block color="indigo">Download</v-btn>
                </v-flex>
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
    isLoading: false,
    background: require("@/assets/backgrounds/download.jpg"),
    supported: [
      "Mac OS",
      "Windows 64 bit",
      "Linux (experimental)",
      "Android VR (only for Daydream ready devices)"
    ],
    releases: [
      {
        Key: "StandaloneLinux64.zip",
        LastModified: "2019-03-24T15:04:33.000Z",
        ETag: '"730811aa2419582818146a4b5fce364f-5"',
        Size: 22786066,
        StorageClass: "STANDARD"
      },
      {
        Key: "StandaloneOSX.zip",
        LastModified: "2019-03-24T15:04:28.000Z",
        ETag: '"a33e48c9b75894b3fcbef76f8b1dd4d3-5"',
        Size: 24082815,
        StorageClass: "STANDARD"
      },
      {
        Key: "StandaloneWindows64.zip",
        LastModified: "2019-03-24T15:03:44.000Z",
        ETag: '"2f9936d88f7e8d7dc2022066fba520f9-6"',
        Size: 28105304,
        StorageClass: "STANDARD"
      }
    ]
  }),
  mounted() {
    //this.listObjects();
    console.log(this.releases);
  },
  methods: {
    listObjects: async () => {
      const { data } = await axios({
        method: "get",
        url: "/api/releases",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("====>", data);
    },
    requestLink: async key => {
      console.log("this is the requested key", key);
      this.isLoading = true;
    }
  }
};
</script>

<style>
</style>
