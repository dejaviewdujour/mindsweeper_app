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
    <v-container>
      <v-card class="mb-3">
        <v-card-title>
          <h3
            class="font-italic text-muted"
          >The following is an excerpt from an article describing how you can improve your Facebook security</h3>
        </v-card-title>
        <v-card-actions>
          <v-btn
            :href="article.link"
            flat
            outline
            round
            color="indigo"
          >The original article can be found here</v-btn>
        </v-card-actions>
      </v-card>
      <v-card flat>
        <v-card-title>
          <h3 class="display-1">{{article.title}}</h3>
        </v-card-title>
        <v-divider class="divider"></v-divider>
        <v-card-text>
          <h4 class="subheading text-muted">{{article.published}}</h4>
        </v-card-text>
      </v-card>
      <v-card v-for="(item, index) in article.text" :key="index" flat>
        <v-card-title>
          <h2>{{item.title}}</h2>
        </v-card-title>

        <v-card-text>
          <p class="subheading" v-for="(element, position) in item.parr" :key="position">{{element}}</p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/backgrounds/security.jpg"),
    article: {
      link:
        "https://www.scentropic.com/blog/2018/sep/facebook-data/facebook-data.shtml?utm_source=Medium&utm_medium=blog&utm_campaign=FBdata",
      title: "How to Review Your Amassing Facebook Data",
      published: "By Entropic September 12, 2018",
      text: [
        {
          title: "Removing Specific Items of Information",
          parr: [
            `After reviewing your downloaded information, you might ask "How do I prevent collection of all or part of this information?". Under the Your Facebook Information in "Settings", select the "Manage Your Information" option.`,
            `This section is less user friendly, leading you down the path of seemingly arbitrary help links that may, or may not actually help you to prevent collection, or delete specific items of information. In short, you'll need patience to navigate this area - Facebook has not made this as user friendly as it could be. This also means it's worthy of future discussion in detail, in terms of how to get things done.`
          ]
        },
        {
          title: "Removing Your Entire Account",
          parr: [
            `The option to Delete Your Account and Information is a lot more user friendly than the "Manage Your Information" option, and allows you to permanently delete your personal information from Facebook data centers, and close your account.`,
            `Unfortunately, permanently doesn't imply immediate. You'll have to wait 14 days for this to happen, and will have to somehow resist the urge to re-activate your account during this time :) Following this period, Facebook requires an additional 76 days (90 days in total) to permanently delete all of your personal information from their data centers.`
          ]
        }
      ]
    }
  })
};
</script>

<style>
.text-muted {
  color: #6c757d;
}
</style>
