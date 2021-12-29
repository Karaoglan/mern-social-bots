const BotCommand = require("./bot-command");

class PingCommand extends BotCommand {
  constructor() {
    super();
  }

  process(args, message) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
}
module.exports = PingCommand;
