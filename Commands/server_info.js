const { SlashCommandBuilder, time } = require('@discordjs/builders');
const {helpResponse} = require(`../package.json`);

const response = async (interaction)=>{
    console.log(interaction);
    
    await interaction.reply(helpResponse);
    // await interaction.reply(`requested by: ${interaction.user.username}`);
    // await interaction.followUp(`---- HELP ----`);
    // await interaction.followUp(`${interaction.channel.name}`);
    // await interaction.followUp(`${app_info.name} running version ${app_info.version}`);
    // await interaction.followUp(`channel: ${interaction.channel.name}`);
    // await interaction.followUp(`time: ${time.toString()}`);
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server_info')
		.setDescription('Replies with Server details'),
	async execute(interaction) {
        await response(interaction);
	},
};
