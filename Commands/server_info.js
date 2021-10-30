const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server_info')
		.setDescription('Replies with Server details'),
	async execute(interaction) {
        // server status
        // online?
        // server name
        // 
        // [help|?] for 
		await interaction.reply(
            `Online\n` + // this will be used later
            `${interaction}\n` +
            `and stuff...`
        );

	},
};
