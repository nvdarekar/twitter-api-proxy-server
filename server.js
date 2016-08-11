var twitterProxyServer = require('twitter-proxy');
var port = process.env.PORT || 5000;
port = port.toString();
twitterProxyServer({
  consumerKey: '< paste your Twitter API key here >',
  consumerSecret: '<%- paste your Twitter Api Secret here %>',
  accessToken: "",
  accessTokenSecret: "",
  port: port
});
