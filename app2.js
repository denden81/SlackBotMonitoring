var Botkit = require('botkit');
var controller = Botkit.slackbot({require_delivery: true});
// my token dz  https://api.slack.com/custom-integrations/legacy-tokens
var bot = controller.spawn({
    token: "xoxp-"
})
bot.startRTM(function (err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});
controller.hears(["poll сред!"],["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, '/poll "какие среды заняты" "тест1" "тест2" "тест3" "тест4" "тест5" "тест6" "тест7" "тест8"');
});
controller.hears(["(ERROR Test:Test ok! Web is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'web ok');
 });
 controller.hears(["(ERROR Test:Test ok! Parser Consumer is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'prsc ok');
 });
 controller.hears(["(ERROR Test:Test ok! Parser Ecolab is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'prse ok');
 });
 controller.hears(["(ERROR Test:Test ok! Injection Parser Ecolab is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'inprc ok');
 });
 controller.hears(["(ERROR Test:Test ok! InjectionParserConsumerASN is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'asn ok');
 });
 controller.hears(["(ERROR Test:Test ok! Parser Bacardi is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'bac ok');
 });
 controller.hears(["(ERROR Test:Test ok! Parser Vistakon is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'vis ok');
 });
 controller.hears(["(ERROR Test:Test ok! Tasks is works.)"], ["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
     bot.reply(message, 'tsk ok');
 });
