# CopyPasta

Chrome extension for Twitch.TV

- Uses webpack, node.js and twitch-js

How to create local extension:

1. Navigate to chrome://extensions/
2. Toggle developer mode on
3. Load unpacked
4. Select dist directory

How to make changes:

1. npm install webpack -g
2. npm i -g webpack-cli
3. Type webpack into terminal - webpack automatically watches files and rebuilds for changes

Chat messages can currently be tracked through the chrome console.

SWITCHING TO REQUIRE-JS
https://requirejs.org/docs/start.html
https://docs.tmijs.org/v1.3.0/Events.html

NOTES:

- Determine categories from which to weight similiarity on (message length, compare word sets etc...)
- Switching channels
- Possible database for known copypastas for specific channels?

http://jsfiddle.net/a5ncfpe2/7/ - possible solution to text variable
