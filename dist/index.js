var channel;
// TODO: Make it so it doesn't connect to an IRC unless it's an actual stream (check html?)
// TODO: CHECK FOR CHANNEL CHANGE !!!!!!!!!!

window.addEventListener("beforeunload", function(event) {
  this.console.log("test");
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.preventDefault();
});

// Set channel variable to current streamer
var docURL = document.URL;
var len = docURL.length;
var i;
for (i = len; i > 0; i--) {
  if (docURL[i] == "/") {
    channel = "#" + docURL.substring(i + 1, len);
    break;
  }
}

// Require the TwitchJS library.
const TwitchJS = require("twitch-js");

// Setup the client with your configuration; more details here:
// https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Configuration.md
const options = {
  connection: {
    reconnect: true,
    secure: true
  },
  options: {
    // Some methods may require a client ID. If needed, please provide a
    // client ID below.
    // clientId: CLIENT_ID,
    debug: true
  },
  // Some methods may require an identity. If needed, please provide one
  // here. Prepend your token with "oauth:".
  // identity: {
  //   username: 'twitchapis',
  //   password: TOKEN,
  // },
  channels: [channel]
};

const client = new TwitchJS.client(options);

// connect to the Twitch channel.
client.connect();

// client.on("serverchange", function(channel) {
//   console.log("test");
// });

var messages = [];

client.on("chat", (channel, userstate, message, self) => {
  console.log(message, channel, userstate, self);
  //   if (messages.length < 30) {
  //     messages.push(message);
  //   } else {
  //     console.log(messages);
  //   }
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   alert("rawr");
// });

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   // how to fetch tab url using activeInfo.tabid
//   chrome.tabs.get(activeInfo.tabId, function(tab) {
//     console.log(tab.url);
//   });
// });
