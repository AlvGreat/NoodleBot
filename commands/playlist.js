module.exports = {
	name: 'playlist',
    description: 'Displays *the* playlist',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        // message.channel.send('This command is currently disabled.');
        
        // send the playlist link out
        // message.channel.send('Main playlist: https://www.youtube.com/playlist?list=PLrwcmfgl_RFr2WikQnbxgwF1qZtXKDbd5 \nFaves! https://www.youtube.com/playlist?list=PLrwcmfgl_RFpDIEUh3h_AumYNuDYsPAOw');
        
        
        const exampleEmbed = {
            color: 0x92C6DD,
            author: {
                name: 'Playlist Links',
            },

            fields: [
                {
                    name: 'Main Playlist!',
                    value: 'https://www.youtube.com/playlist?list=PLrwcmfgl_RFr2WikQnbxgwF1qZtXKDbd5',
                    inline: false,
                },
 
                {
                    name: 'Faves Playlist!',
                    value: 'https://www.youtube.com/playlist?list=PLrwcmfgl_RFpDIEUh3h_AumYNuDYsPAOw',
                    inline: false,
                },
            ],
        };
        
        message.channel.send({ embed: exampleEmbed });  
    },
};
