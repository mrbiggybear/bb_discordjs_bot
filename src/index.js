const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const app_info = require(`../package.json`);

const { bot } = require('../config.json');
const token = bot.token;
// require("dotenv").config();
// const token = process.env.BOTTOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");

	console.log(
		`${app_info.name} is currently running on version v${app_info.version}`
	);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	console.log(interaction);
	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});


// Login to Discord with your client's token
client.login(token);