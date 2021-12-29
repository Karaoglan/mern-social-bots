const express = require("express");
const cors = require("cors");
const Discord = require("discord.js");
const config = require("./config.json");
const BotCommandFactory = require("./command-factory/bot-command-factory");

const app = express();
const port = 3000;

const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

bot.login(config.DISCORD_BOT_TOKEN);
const prefix = "!";

const corsOptions = {
  origin: "http://localhost:3001",
};

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("messageCreate", function (message) {
  //console.log(message);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  try {
    const botCommand = BotCommandFactory.create(command);
    botCommand.process(args, message);
  } catch (e) {
    console.error(e);
  }
});

app.get("/", cors(corsOptions), (req, res) => {
  console.log(req);
  res.json({ message: "Hello World! root" });
});

app.get("/hello", cors(corsOptions), (req, res) => {
  console.log(req);
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
