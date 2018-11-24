var channel;
var docURL = document.URL;
var len = docURL.length;

var test;
var i;
for (i = len; i > 0; i--) {
    if (docURL[i] == "/") {
            channel = "#" + docURL.substring(i + 1, len)
            break
    }
}

// Require the TwitchJS library.
const TwitchJS = require('twitch-js');

// Setup the client with your configuration; more details here:
// https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Configuration.md
const options = {
  connection: {
    reconnect: true,
    secure: true,
  },
  options: {
    // Some methods may require a client ID. If needed, please provide a
    // client ID below.
    // clientId: CLIENT_ID,
    debug: true,
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

// Add listeners for events, e.g. a chat event.
client.on("chat", (channel, userstate, message, self) => {
  // You can do something with the chat message here ...
  console.log(message);
});

// Finally, connect to the Twitch channel.
client.connect();