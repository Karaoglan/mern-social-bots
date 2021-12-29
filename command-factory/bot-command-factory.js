const NotValidCommandError = require("../errors/command-not-valid-error");
const PingCommand = require("./ping-command");
const SumCommand = require("./sum-command");

class BotCommandFactory {
  static create(command) {
    switch (command) {
      case "ping":
        return new PingCommand();
      case "sum":
        return new SumCommand();
      default:
        throw new NotValidCommandError("Bot Command Not Found");
    }
  }
}
module.exports = BotCommandFactory;
