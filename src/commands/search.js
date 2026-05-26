const { searchYouTube } = require('../services/youtubeService');

async function handleSearch(bot, msg, match) {

    const chatId = msg.chat.id;

    const query = match[1];

    try {

        const videos = await searchYouTube(query);

        let message = `Results for "${query}":\n\n`;

        videos.forEach((video, index) => {

            const title = video.snippet.title;

            const channel = video.snippet.channelTitle;

            const videoId = video.id.videoId;

            message += `${index + 1}. ${title}\n`;

            message += `https://www.youtube.com/watch?v=${videoId}\n\n`;
        });

        bot.sendMessage(chatId, message);

    } catch (error) {

        console.error(error.message);

        bot.sendMessage(chatId, 'Search failed');
    }
}

module.exports = handleSearch;