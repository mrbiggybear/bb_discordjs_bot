const { prefix } = require("../config.json");

module.exports = (client, aliases, callback) => {
  if (typeof aliases === "string") {
    aliases = [aliases];
  }
// capture message
  client.on("message", (message) => {
    const { content } = message;

    aliases.forEach((alias) => {
        // check aliases here
      const command = `${prefix}${alias}`;

      if (content.includes(`${command}`) || content === command && content.toLower() == "!ping" ) {
        console.log(`Running the command ${command}`);
        callback(message);
      }
    });
  });
};
