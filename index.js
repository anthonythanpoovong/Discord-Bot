//The necessary discord.js Class
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

//Creating a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); //Used to ensure that caches for guilds, channels and roles are populated and available for internal use

//When the client is ready, run this code only once
client.once('ready', () => {
	console.log('Ready!');
});
//Client commands
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'hi') {
		await interaction.reply('Hello');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

//Client login token
client.login(token);


