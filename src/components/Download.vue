<template>
  <div>
    <v-jumbotron
      :gradient="gradient"
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Download your Facebook Data</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container>
      <v-card>
        <v-card-text>
          <v-card v-for="(item, index) in steps" :key="index" class="mb-4" flat>
            <v-card-text>
              <div class="title">
                <v-layout>
                  <v-flex md1>
                    <!-- <strong>{{index + 1}}.-</strong> -->
                    <i class="fas fa-hand-point-right"></i>
                  </v-flex>
                  <v-flex md11>
                    {{item.text}}
                    <div v-if="item.sublist">
                      <v-list>
                        <v-list-tile
                          avatar
                          v-for="(element, position) in item.sublist"
                          :key="position"
                        >
                          <v-list-tile-avatar>
                            <v-icon>label_important</v-icon>
                          </v-list-tile-avatar>

                          <v-list-tile-content>
                            <v-list-tile-title>
                              <div class="subheading">{{element}}</div>
                            </v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </div>
                  </v-flex>
                </v-layout>
              </div>
            </v-card-text>

            <v-layout>
              <v-flex md3></v-flex>
              <v-flex md6>
                <v-img v-if="item.img" :src="item.img" max-height="25rem" contain></v-img>
              </v-flex>
              <v-flex md3></v-flex>
            </v-layout>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)",
    steps: [
      { text: `Go to Facebook and sign in.`, img: "" },
      {
        text: `Select the down arrow tab beside the question mark in your dashboard, and click "Settings."`,
        img: require("@/assets/instructions/01.png")
      },
      {
        text: `Select "Your Facebook information" from the options on the left pane.`,
        img: require("@/assets/instructions/02.png")
      },
      {
        text: `Select "Download Your Information".`,
        img: require("@/assets/instructions/03.png")
      },
      {
        text: `Make sure you select "New File", and the followings:`,
        sublist: [
          "Date Range: all of your data",
          "Format: JSON",
          "Quality of media: Medium (choose Low if you would like your information faster)"
        ],
        img: require("@/assets/instructions/04.png")
      },
      {
        text: `Select the “Create File” button.`,
        img: require("@/assets/instructions/05.png")
      },
      {
        text: `After a few minutes (as much as 30 minutes if you are a frequent Facebook user), you will receive a notification on Facebook that it is ready to download a zip folder.`,
        img: ""
      },
      {
        text: `Select the "Download" button to download the folder to your device.`,
        img: require("@/assets/instructions/06.png")
      },
      {
        text: "Once you have downloaded the zip folder, unzip it.",
        sublist: [
          "If using MacOS, double click the file in Finder.",
          `If using Windows, right click on it and select "Extract All" , and then follow the instructions.`
        ],
        img: ""
      },
      {
        text: `Now that you have a new folder named “facebook-<YOUR_USERNAME>”. Remember the pathway to this file, you will need it when using Mindsweeper.`,
        img: ""
      },
      {
        text: `Congratulations! You have a very valuable file so keep it safe!`,
        img: ""
      }
    ]
  })
};
</script>

<style>
</style>
