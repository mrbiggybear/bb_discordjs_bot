const { SlashCommandBuilder } = require('@discordjs/builders');
const {helpResponse} = require(`../package.json`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(helpResponse);
    }
};