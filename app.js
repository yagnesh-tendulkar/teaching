var restify = require('restify');
var builder = require('botbuilder');
var LUIS = require('luis-sdk');
var moment = require('moment');
var ping = require("ping");
var unirest = require("unirest");
const request = require('request-promise')
var globalOrder = null;
var bot = new builder.UniversalBot(connector);
var server = restify.createServer();
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8000, function () {
    console.log("--------------------------------------------------------");
    console.log("Kohler is running with the address : " + server.url);
    console.log("--------------------------------------------------------");
});
var connector = new builder.ChatConnector({
    appId: "d6df1aab-d659-474e-bff6-8c187ef39305",
    appPassword: "]_L[U4SYS@BFGfntnFFtF6Jg1Pi06t2m"
});
var bot = new builder.UniversalBot(connector, {
    storage: new builder.MemoryBotStorage()
});
server.post('/api/messages', connector.listen());
// server.use(restify.conditionalRequest());
//var bot = new builder.UniversalBot(connector);
var bot = new builder.UniversalBot(connector, {
    storage: new builder.MemoryBotStorage()
});
var onum, onumber;
var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/9412a8cf-2cba-4964-80ef-b08630948718?verbose=true&timezoneOffset=-360&subscription-key=c2d40a5393cd495d81e8f0271cee39af&q='
var recognizer = new builder.LuisRecognizer(model);
var dialog = new builder.IntentDialog({
    recognizers: [recognizer]
});
var count = 0;
var n = 0;
server.post('/api/messages', connector.listen());
bot.dialog('/', dialog);

dialog.matches('greetings', [
    function (session, args) {
        console.log(session)
        session.sendTyping();
        //   session.send("Hello ** You **");
        session.send("Hey ! How can I help you today?");

    }
]);
//bb10e828-a337-4087-8132-eb7a0e2370f4 app id