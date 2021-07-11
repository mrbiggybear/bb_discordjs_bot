const Discord = require("discord.js");
const client = new Discord.Client();
const env = require("dotenv").config();

const app_info = require("./package.json");
const { prefix, commands } = require("./config.json");

// const command = require("./Commands/command.js");
// const pong = require("./Commands/pong.js");

// introductions
console.log(`${app_info.name} is live`);

// sends msg on same channel command was recieved.
let send_msg = async function (client_message, message) {
  client_message.channel.send(message);
};

// checks for match using commands in 'config.json'
// returns true if user command matches one in config.
let matches = (tokens, c_cmd) => {
  for (const token in tokens) {
    if (Object.hasOwnProperty.call(tokens, token) && tokens[token] == c_cmd) {
      return true;
    }
  }
  console.log("returning false from match...");
  return false;
};

let help = (c_msg) => {
  console.log(`Running the command 'help'`);
  send_msg(c_msg, "No one can help you!");
};

let info = (c_msg) => {
  console.log(`Running the command 'info'`);
  send_msg(c_msg, "meta info will be available soon.");
};

let command = (client) => {
  client.on("message", (client_message) => {
    let content = String(client_message);

    arg_list = content.split("/");
    console.log(`${typeof arg_list}: ${arg_list}`);
    c_token = arg_list[0];
    c_cmd = arg_list[1];

    let help_tokens = commands["help"];
    let info_tokens = commands.info;

    if (c_token === String(prefix).slice(0, 2)) {
      console.log("bb command was recieved.");

      console.log(help_tokens, c_cmd);
      if (matches(help_tokens, c_cmd)) {
        console.log("help");
        help(client_message);
      }
      console.log(info_tokens, c_cmd);
      if (matches(info_tokens, c_cmd)) {
        console.log("info");
        info(client_message);
      }
    }
  });
};

// start
client.on("ready", () => {
  console.log(
    `${app_info.name} is currently running on version v${app_info.version}`
  );
  command(client);
});

client.login(process.env.BOTTOKEN);
