const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();

const command = require('./Commands/command.js');
const pong = require('./Commands/pong.js');

console.log('Yay your bot is live');

client.on('ready', () => {
    console.log(`Bot is currently running on version v${require('./package.json').version}`);

    command(client,'ping', message => {
        pong(message);
    });
});

client.login(process.env.BOTTOKEN);
