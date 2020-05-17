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
                name: 'Shrimp and Noodles Playlist Links:',
                icon_url: 'https://i.imgur.com/fAdBf3B.jpg'
            },
            fields: [
                {
                    name: 'Main Playlist:',
                    value: 'https://www.youtube.com/playlist?list=PLrwcmfgl_RFr2WikQnbxgwF1qZtXKDbd5',
                    inline: false,
                },
 
                {
                    name: 'Faves Playlist:',
                    value: 'https://www.youtube.com/playlist?list=PLrwcmfgl_RFpDIEUh3h_AumYNuDYsPAOw',
                    inline: false,
                },
		
		{
                    name: 'Chinese Playlist:',
                    value: 'https://www.youtube.com/playlist?list=PLrwcmfgl_RFqCEJ1agucYtTdh4XQi-yW5',
                    inline: false,
                },
		    
		{
		    name: 'Lofi Livestream:',
		    value: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
		    inline: false,    
		},

            ],
        };
        
        message.channel.send({ embed: exampleEmbed });  
    },
};
