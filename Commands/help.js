const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies with help dialog!'),
	async execute(interaction) {
		await interaction.reply('Help is not yet ready.');
	},
};
