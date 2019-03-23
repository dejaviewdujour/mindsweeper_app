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
    background: require("@/assets/backgrounds/surprised.jpg"),
    article: {
      link:
        "https://www.popsci.com/advertisers-targeting-facebook-account-settings",
      title:
        "You wanna see something wild? Check out all the advertisers targeting you on Facebook.",
      published: "By Stan Horaczek April 13, 2018",
      text: [
        {
          title: "",
          parr: [
            `Mark Zuckerberg spent roughly 11 hours this week testifying in front of Congressional committees about Facebook and the way it handles user data (among other things). One thing that got very little attention was the concept of “data brokers,” middleman businesses that collect consumer information and sell it to companies. Facebook stopped using them just last month. However, that long string of companies, personalities, and alternative rock bands (my roster is 429 items long) is a result of Facebook’s old program.`
          ]
        },
        {
          title: "Someone probably sold your data",
          parr: [
            `At the end of last month, after the Cambridge Analytica scandal broke, but before Mark Zuckerberg’s marathon testimony in front of Congress, Facebook announced that it was ending a program called Partner Categories, canceling a long-standing relationship between the social network and data brokers. The change was announced in a short statement, but it has big implications for your personal information and the agencies that collect and sell it.`,
            `The ability to target advertising is what makes Facebook its money—roughly $40 billion last year. The better the network is able to target users with relevant advertising, the more money it can make. And while you provide lots of user information to Facebook, advertisers typically want even more. Companies who want to sell you things can collect your data through various channels, like convincing you to sign up for regular newsletters, rewards programs, or take surveys when you’re in a store. That isn’t always enough, though, and that’s where data brokers come in.`,
            `Facebook calls on brokers like Acxiom, Epsilon, and TransUnion (Zuck also refers to these partners as “data providers”) to act as a conduit between Facebook and individual advertisers looking to reach targeted audiences.`,
            `Here’s an example Facebook offers: Imagine you’re a car dealer and you want to target people who might buy a car. You go to a data provider like Acxiom who can analyze the vast amounts of personal data it has at its disposal to try and figure out which people might fit that criterion. Then, that list gets uploaded to Facebook who can target the matching users as well as others like them.`,
            `So, in this case, Facebook did not actually sell your data, which was one of Zuckerberg’s most common talking points during the recent Congressional testimony. However, bought-and-sold information is part of the equation.`,
            `As part of Facebook’s deal with these data providers—which it says it will end in the next six months—you can see when a targeted ad hits your stream as a result of one of these deals. You can dig your way to the “why am I seeing this?” option on every Facebook ad, and it will disclose which data provider put your personal info into the mix for that specific placement.`
          ]
        },
        {
          title: "How did that provider get my info?",
          parr: [
            `Businesses have been collecting and leveraging data since the days of junk snail mail, but the internet has made it oh-so-much easier. Acxiom has a website called Aboutthatdata.com, that’s filled with the expected levels of corporate speak on the subject.`,
            `Acxiom collects its core data (that’s what it calls raw information that it hasn’t analyzed) in a variety of ways. Here’s a snippet from the site: "Core data can come from many sources, such as when people sign up for services, buy tickets for a sporting event, donate to a charity or purchase a new vehicle. The companies that share their data for marketing purposes will let you know this in their privacy policy and give you a chance to opt-out."`,
            `Remember when RadioShack asked for your phone number when you wanted to buy batteries? This is one of the reasons why. Brokers can also scrape public records about you, so they knows if you own a house, as well as details about it.`,
            `Acxiom then takes that core data and extrapolates it to create what it calls “modeled data,” which fits people into more complex categories. like those who might go to a soccer game or donate to PBS. That list of categorized data meshes with Facebook’s data about you (say, your age, location, and political leanings), and out come the ads ready to catch you at your moment of consumerist weakness. Don’t worry, it happens to all of us.`,
            `That process brings us back to Facebook. As part of the deal, Facebook required that these data providers include opt-out of the tracking process, though navigating them can get complicated. Experian, for instance, has seven different opt-out links on its opt-out page.`,
            `Here are all the opt-outs for the major data providers in one handy clump:`,
            `Experian Epsilon Oracle TransUnion i-Behavior`,
            `It's important to note that opting out through those links won't necessarily absolve you of all online tracking. In fact, the TransUnion link only opts you out of Facebook-specific tracking, not out of its tracking services in general.`,
            `You can see some of your data that these providers have collected. For instance, if you sign up for an account on Acxiom (which requires you to enter a fair bit of personal information to confirm your identity), you can see the demographic data they have and use for marketing. It’s an incomplete picture, however. Acxiom also provides what it calls “partner data” from other companies. You can request that data, too, but you have to do so via email. It’s a process.`
          ]
        },
        {
          title: "The sites you've seen",
          parr: [
            `Not every ad you see or name on that list of advertisers in your settings comes from data brokers. Some will say that they show up because you have used their app or gone to their website in the past. In those cases, Facebook can actually see that you have visited a site if it's using a Facebook "Like" button, or the Facebook tracking tool called a Pixel, which doesn't actually show up on the page, but helps the service track where you have been on the web. So, while I've never given Mount Snow my information, I have visited their website, which landed them in my feed as a targeted ad.`
          ]
        },
        {
          title: "Data broker life after Facebook",
          parr: [
            `As stated above, this program is going away as part of Facebook’s sweeping security reform, but it doesn’t mean these data brokers are going away. It will hurt them, however. Acxiom has reportedly said it could drop its 2019 fiscal revenue by up to $25 million.`,
            `There’s still plenty of data collection going on, however. A 2014 FTC study showed the extent of it. "Just one of the data brokers studied holds information on more than 1.4 billion consumer transactions and 700 billion data elements and another adds more than 3 billion new data points to its database each month."`
          ]
        }
      ]
    }
  })
};
</script>

<style>
</style>
