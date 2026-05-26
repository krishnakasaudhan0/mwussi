const TelegramBot = require('node-telegram-bot-api');

const { botToken } = require('./config/config');

const handleSearch = require('./commands/search');

const bot = new TelegramBot(botToken, {
    polling: true
});

console.log('Bot running...');

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, 'Music discovery bot running');
});

bot.onText(/\/search (.+)/, (msg, match) => {

    handleSearch(bot, msg, match);
});