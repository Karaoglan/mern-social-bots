class NotValidCommandError extends Error {
  constructor(msg) {
    super(msg);
  }
}
module.exports = NotValidCommandError;
