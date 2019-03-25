<template>
  <div>
    <v-jumbotron dark :src="background">
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
        },
        {
          name: "apps_and_websites",
          files: [
            {
              fileName: "apps_and_websites.json",
              description: [
                `The apps you have installed and websites you interacted with using your Facebook account are listed here. posts_from_apps_and_websites.json The posts you made from the other apps and websites to Facebook are listed here.`
              ]
            },
            {
              fileName: "calls_and_messages",
              description: [
                `If you are Android user, your call time, when you called, and times you sent text messages are stored here. Facebook can not successfully record those data if you are using iPhone. The contents of of your phone conversation or text messages are not recorded.`
              ]
            }
          ]
        },
        {
          name: "comments",
          files: [
            {
              fileName: "comments.json",
              description: [
                `All the comments you made, the description of the comment and to whom you responded to (ex. Yuma replied to someone), when it was posted, and your name are listed here.`
              ]
            }
          ]
        },
        {
          name: "events",
          files: [
            {
              fileName: "event_invitations.json",
              description: [
                `All the events you were invited to and when they start and end are listed here.`
              ]
            },
            {
              fileName: "your_event_responses.json",
              description: [
                `All the events categorized by if you have joined, declined to go, or had only interest in, are listed here.`
              ]
            },
            {
              fileName: "your_events.json",
              description: [
                `All the events you have created, with its name, coordinate, address, description and timestamp are listed here.`
              ]
            }
          ]
        },
        {
          name: "files",
          files: [
            {
              fileName: "",
              description: [
                `All the files such as .pdf and .docx (except for images) you have shared in Messenger are listed here.`
              ]
            }
          ]
        },
        {
          name: "following_and_followers",
          files: [
            {
              fileName: "followed_pages.json",
              description: [`Pages you follow are listed here.`]
            },
            {
              fileName: "following.json",
              description: [
                `The people you are following and when you started follow are listed here.`
              ]
            },
            {
              fileName: "unfollowed_pages.json",
              description: [
                `The pages you unfollowed and when you started doing that are listed here.`
              ]
            }
          ]
        },
        {
          name: "friends",
          files: [
            {
              fileName: "friends.json",
              description: [`All your Facebook friends are listed here.`]
            },
            {
              fileName: "received_friends_requests.json",
              description: [
                `All the people you have received a friends request from that are pending are listed here.`
              ]
            },
            {
              fileName: "rejected_friend_requests.json",
              description: [
                `All the people you have rejected a friends request from are listed here.`
              ]
            },
            {
              fileName: "removed_friends.json",
              description: [
                `All the people you have removed from your Facebook friends are listed here.`
              ]
            },
            {
              fileName: "sent_friend_requests.json",
              description: [
                `All the people you have sent friends requests to and did not get accepted from are listed here.`
              ]
            }
          ]
        },
        {
          name: "groups",
          files: [
            {
              fileName: "your_group_membership_activity.json",
              description: [
                `All the groups you joined and when you joined them are listed here.`
              ]
            },
            {
              fileName: "your_groups.json",
              description: [
                `All the groups you are an administer for are listed here.`
              ]
            },
            {
              fileName: "your_posts_and_comments_in_groups.json",
              description: [
                `All the comments you gave in groups, when and who did it, and the title of that action (ex. "Yuma replied to someone in the group _________") are listed here.`
              ]
            }
          ]
        },
        {
          name: "likes_and_reactions",
          files: [
            {
              fileName: "pages.json",
              description: [
                `All the pages you liked and when you liked them are listed here.`
              ]
            },
            {
              fileName: "posts_and_comments.json",
              description: [
                `All the reactions you made to other’s posts/comments, their name, and when are listed here.`
              ]
            },
            {
              fileName: "likes_on_external_sites.json",
              description: [
                `All the pages you liked from an embedded Facebook link on an external website and when you liked them are listed here.`
              ]
            }
          ]
        },
        {
          name: "location",
          files: [
            {
              fileName: "[UNVERIFIED]",
              description: [
                `Possibly all the location information when you used your mobile Facebook app or published your posts on Facebook are listed here.`
              ]
            }
          ]
        },
        {
          name: "marketplace",
          files: [
            {
              fileName: "items_sold.json",
              description: [
                `All of the items, their prices, category, location, coordinates, description, the specific marketplace name, when it was posted and updated, and who sold them are shown here. Includes items you have posted to sell. [UNVERIFIED] Possibly includes items you have purchased from the Marketplace.`
              ]
            }
          ]
        },
        {
          name: "messages",
          files: [
            {
              fileName: "archived_threads.json",
              description: [
                `Contains repositories including gifs, photos, videos and actual messages you have received/sent and ended up archiving.`
              ]
            },
            {
              fileName: "filtered_threads.json",
              description: [
                `Contains repositories just like above, but including the ones filtered. The reasons why they are filtered is unknown.`
              ]
            },
            {
              fileName: "inbox",
              description: [
                `It contains repositories, that is, different groups in Messenger, and each of them contains information about messages you have received and sent. "Messages" include the autogenerated one like "Say hello to your new friend _____!"`
              ]
            },
            {
              fileName: "message_requests",
              description: [
                `The same structure as above, all the messages that you have received but are still pending.`
              ]
            },
            {
              fileName: "stickers_used",
              description: [
                `All the stickers used in your messages (received/sent) are listed here.`
              ]
            }
          ]
        },
        {
          name: "other_activity",
          files: [
            {
              fileName: "pokes.json",
              description: [
                `All the pokes you have sent and received are listed here. Strangely, it includes a rank.`
              ]
            },
            {
              fileName: "polls_you_voted_on.json",
              description: [
                `Recollection of all the poll you have voted on are listed here.`
              ]
            }
          ]
        },
        {
          name: "pages",
          files: [
            {
              fileName: "your_pages.json",
              description: [`All the Facebook pages you own are listed here.`]
            }
          ]
        },
        {
          name: "payment_history",
          files: [
            {
              fileName: "payment_history.json",
              description: [
                `Your payment history using Facebook (including ad purchases) are listed here.`
              ]
            }
          ]
        },
        {
          name: "photos_and_videos",
          files: [
            {
              fileName: "album",
              description: [
                `Contains a series of json files on photos you have uploaded, their comments, and who and when those comments were given.`,
                `Contains actual photos you have uploaded, "thumbnails", "stickers_used" in the comments, "videos" and so on.`,
                `If you wanted higher resolution files, you will have to redownload your Facebook data file with “Quality of Media” set to HIGH.`
              ]
            }
          ]
        },
        {
          name: "posts",
          files: [
            {
              fileName: "other_people's_posts_to_your_timeline.json",
              description: [
                `Information about other people's posts to your timeline are listed here.`
              ]
            },
            {
              fileName: "your_posts.json",
              description: [
                `It contains information about every post you have made.`
              ]
            }
          ]
        },
        {
          name: "profile_information",
          files: [
            {
              fileName: "profile_information.json",
              description: [
                `All information about your previous and current profile are listed here.`
              ]
            },
            {
              fileName: "profile_update_history.json",
              description: [
                `The whole history of changes made on your profile are listed here.`
              ]
            }
          ]
        },
        {
          name: "saved_items_and_collections",
          files: [
            {
              fileName: "saved_items_and_collections.json",
              description: [
                `This is the activity log focusing on your action of saving files and links.`
              ]
            }
          ]
        },
        {
          name: "search_history",
          files: [
            {
              fileName: "your_search_history.json",
              description: [
                `All the keywords you have searched in Facebook and when you did so are listed here.`
              ]
            }
          ]
        },
        {
          name: "security_and_login_information",
          files: [
            {
              fileName: "account_activity.json",
              description: [
                `All the device information including IP address and user agent are stored here everytime you update a session.`
              ]
            },
            {
              fileName: "administrative_records.json",
              description: [
                `Same structure as account_activity.json but regarding administrative action (ex. password change).`
              ]
            },
            {
              fileName: "authorized_logins.json",
              description: [
                `Almost same structure, regarding login (ex. recognized devices).`
              ]
            },
            {
              fileName: "login_protection_data.json",
              description: [
                `The "name" value shows you the approximate GPS location deduced from your IP address, and/or cookie related information.`
              ]
            },
            {
              fileName: "logins_and_logouts.json",
              description: [
                `When and which IP address logs in and logs out of Facebook are listed here.`,
                `Does not contain a full list.`
              ]
            },
            {
              fileName: "used_ip_addresses.json",
              description: [
                `The list of all the used IP addresses are listed here.`
              ]
            },
            {
              fileName: "where_you're_logged_in.json",
              description: [
                `All the locations where you accessed Facebook, using what kind of device, along with the app you used, agent and IP address, are listed here.`
              ]
            }
          ]
        },
        {
          name: "stories",
          files: [
            {
              fileName: "archived_stories.json",
              description: [
                `Stories that were archived by the user containing a photo URI, a title, a timestamp and the photo metadata are listed here.`
              ]
            }
          ]
        },
        {
          name: "your_places",
          files: [
            {
              fileName: "places_you've_created.json",
              description: [
                `All the categories, places, pages or interests you have created for your own sake are listed here.`
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
