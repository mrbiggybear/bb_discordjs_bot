const { SlashCommandBuilder } = require('@discordjs/builders');

const response = ()=>{
	return 'Pong!';
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Replies with \"${response()}\"`)
	,
	async execute(interaction) {
		console.log(`responding with \"${response()}\"`);
		await interaction.reply('Who pinged!?');
		
		await interaction.followUp({ content: response, ephemeral: true });
		// await interaction.followup('Pong!');
		await interaction.deleteReply();
	},
};
