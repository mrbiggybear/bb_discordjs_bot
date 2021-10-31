const app_info = require(`../package.json`);

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        // console.log("Ready!");

        console.log(`${app_info.name} is currently running on version v${app_info.version}`);
    
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
