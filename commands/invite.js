module.exports = {
	name: 'invite',
    description: 'Gives the invite link for Noodle!',
    aliases: [],
    guildOnly: false,
    cooldown: 1,
	execute(message, args) {
        //message.channel.send('The bot is currently private');
        message.channel.send('Bot invite link: https://discordapp.com/oauth2/authorize?client_id=697984301567836323&scope=bot&permissions=8 \n**Note**: the bot is currently private.');
	},
}