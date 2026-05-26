const axios = require('axios');
    
const { youtubeApiKey } = require('../config/config');

async function searchYouTube(query, maxResults = 5) {

    const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
            params: {
                part: 'snippet',
                q: query,
                key: youtubeApiKey,
                maxResults,
                type: 'video'
            }
        }
    );

    return response.data.items;
}

module.exports = {
    searchYouTube
};