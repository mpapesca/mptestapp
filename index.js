const Discord = require("discord.js");
const config = require("./config.json");
const { logMessage } = require('./src/log-message');
const process = require('process');
const { messageCreateEvent } = require('./src/client-events')
const { exitEvent, sigintEvent } = require('./src/process-events');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

logMessage('start up');

client.on("messageCreate", messageCreateEvent);

process.on('exit', exitEvent);

process.on('SIGINT', sigintEvent);

client.login(config.BOT_TOKEN);