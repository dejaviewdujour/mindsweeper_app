<template>
  <div>
    <v-jumbotron :gradient="gradient" dark :src="background">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">What are these files?</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container>
      <v-card>
        <v-card-title>
          <h3>{{files.intro}}</h3>
        </v-card-title>
      </v-card>
      <v-card v-for="(item, index) in files.folders" :key="index">
        <v-card-title>
          <h2>{{item.name}}</h2>
        </v-card-title>
        <v-divider class="divider"/>
        <v-container>
          <v-card v-for="(file, position) in item.files" :key="position">
            <v-card-title>
              <h3>{{file.fileName}}</h3>
            </v-card-title>
            <v-card-text>
              <p class="subheading" v-for="(parr, j) in file.description" :key="j">{{parr}}</p>
            </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    background: require("@/assets/backgrounds/files.jpg"),
    files: {
      intro:
        "The folders and their contents are complex. Not everyone has the same folders and the information stored is different for users who have a Facebook app stored on an Android phone vs. an iPhone. Here are the folders and what contents are included:",
      folders: [
        {
          name: "about_you",
          files: [
            {
              fileName: "face_recognition.json",
              description: [
                `Img data of your face. "Raw data" includes data sets that help Facebook recognize your face.`
              ]
            },
            {
              fileName: "friend_peer_group.json",
              description: [
                `What life stage you are currently at (ex.starting adult life).`
              ]
            },
            {
              fileName: "your_address_books.json",
              description: [
                `If you connect Facebook with a contact list in your phone, it should show full name and phone number of people in your contact list (from iPhone) + when they are created/updated. Facebook has an algorithm that extracts possible phone numbers and names. It is possible you might find someone's name who is neither in your Facebook friends or contact list.`
              ]
            }
          ]
        },
        {
          name: "ads",
          files: [
            {
              fileName: "ads_interest.json",
              description: [
                `Possible add topics you may have an interest in are listed here.`
              ]
            },
            {
              fileName:
                "advertisers_who_uploaded_a_contact_list_with_your_information.json",
              description: [
                `Businesses who have your contact list are listed here.`
              ]
            },
            {
              fileName: "advertisers_you've_interacted_with.json",
              description: [
                `The ads you have interacted with, specific actions you took, and when you did so are listed here.`
              ]
            }
          ]
        }
      ]
    }
  })
};
</script>

<style>
</style>
