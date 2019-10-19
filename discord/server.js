const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

oauth.tokenRequest({
    client_id: "your client ID",
    client_secret: "your client secret",
    grant_type: "authorization_code",
    code: "query code",
    redirect_uri: "http://localhost/",
    scope: "identify guilds"
}).then(console.log);
// If the request was successful
/*
        {
            "access_token": "6qrZcUqja7812RVdnEKjpzOL4CvHBFG",
            "token_type": "Bearer",
            "expires_in": 604800,
            "refresh_token": "D43f5y0ahjqew82jZ4NViEr2YafMKhue",
            "scope": "identify"
        }
*/

      const DiscordOauth2 = require("discord-oauth2");
      const oauth = new DiscordOauth2();

      const clientID = "496357551512441271";
      const client_secret = "cKlFh_71_OXfGVN1hmArPnL8SfKF41kA";
      const access_token = "2qRZcUqUa9816RVnnEKRpzOL2CvHBgF";

      const Base64 = require("js-base64").base64;

      const credentials = Base64(`${clientID}:${client_secret}`);

      oauth.revokeToken(access_token, credentials).then(console.log); // {}
