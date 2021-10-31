const { Integration } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
	async execute(interaction) {
        const client = interaction.client;
        // ToDo: capture command here.
        // console.log(interaction.client);
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        if (!interaction.isCommand()) return;

        // console.log(interaction.commandName);
        // console.log(client.commands);
        const command = client.commands.get(interaction.commandName);
        // console.log(command);

        if (!command) return;
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }    
},

};
 