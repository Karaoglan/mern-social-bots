const BotCommand = require("./bot-command");

class SumCommand extends BotCommand {
  constructor() {
    super();
  }

  process(args, message) {
    const numArgs = args.map((x) => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => (counter += x));
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
}
module.exports = SumCommand;
