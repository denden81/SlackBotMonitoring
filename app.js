var Botkit = require('botkit');
var controller = Botkit.slackbot({require_delivery: true});
//token in slack https://api.slack.com/apps/ABJMJJ21W/general?
var bot = controller.spawn({
    token: "xoxb-"
})

bot.startRTM(function (err, bot, payload) {
    if (err) {
        throw new Error('Could not connect to Slack');
    }
});

controller.hears(["Hello", "Hi"], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, 'Hello, bots works');
});

controller.hears(["(cat)"], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, 'catsss');
});

controller.hears(["poll сред!"],["bot_message", "self_message", "direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, '/poll "какие среды заняты" "тест1" "тест2" "тест3" "тест4" "тест5" "тест6" "тест7" "тест8"');
});

controller.hears(["(help)"], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, 'Бот создан для проверки тестовых сообщений в слак которые выводит Zabbix.\n' +
        'Принцип работы\n' +
        '\n' +
        '1. Напоминалка(/remind) в слаке дает команду на прослушку тестовых сообщений от Zabbix\n' +
        '2. В течении 10 мин идет ожидание сообщений от Zabbix\n' +
        '3. Если второй бот (с токеном юзера) увидел сообщение, то посылает краткое сообщение вида (bkg ок)\n' +
        'ожидающий сообщение первый бот(с токеном бота) видит его и выводит надпись Verified. Zabbix is works\n' +
        '4. Если первый бот не увидел сообщение в течении 10 мин то пишет qa,чтобы проверили zabbix\n' +
        '\n' +
        'Список команд:\n' +
        'давай созвон-создает hangout звонок\n' +
        'cat-выводит catsss\n' +
        'hi - выводит,что бот работает\n' +
        'help-выводит список команд\n' +
        'start monitorin(g)-вызывает проверку сообщений от Zabbix в течении 10 мин\n'
    )
    ;
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

controller.hears(["(давай созвон)"], ["direct_message", "direct_mention", "mention", "ambient"], function (bot, message) {
    bot.reply(message, 'https://hangouts.google.com/hangouts/_/artlogics.ru/bot' + getRandomInt(1, 99999)
    );
});

controller.hears(["(start monitoring)"], ["direct_message", "direct_mention", "self_message", "bot_message", "mention", "ambient"], function (bot, message) {
    bot.createConversation(message, function (err, convo) {

        // path when all ok
        convo.addMessage({
            text: 'Verified. Zabbix is works',
        }, 'work');
        // create a path where neither option was matched
        // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
        convo.addMessage({
            text: 'Sorry I did not understand.',
            action: 'default',
        }, 'bad_response');
        convo.setTimeout(600000);//10min
        convo.onTimeout(function (convo) {

            //convo.say('@qa надо проверить Zabbix');
            convo.next();

        });
        // Create a answer question in the default thread...
        convo.addQuestion('checking...wait 10 min', [
            {
                pattern: '(zabbix ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(web ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(prsc ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(prse ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(inprc ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(asn ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(bac ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(vis ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                pattern: '(tsk ok)',
                callback: function (response, convo) {
                    convo.gotoThread('work');
                },
            },
            {
                default: true,
                callback: function (response, convo) {
                    convo.gotoThread('bad_response');
                },
            }
        ], {}, 'default');

        convo.activate();
    });
})

bot.say(
    {
        text: 'Bot online',
        channel: 'testbots-chanel' //
    })

// Log every message recieved
//controller.middleware.receive.use(function(bot, message, next) {
// log it
//  console.log('RECEIVED: ', message);
// modify the message
//    message.logged = true;
// continue processing the message
//    next();
//});
