/**
 * Easier-to-see log function
 * @param args
 */
const log = (...args) => console.log(
  '\n\n\n\n===========================================\n===========================================\n\n',
  ...args,
  '\n\n===========================================\n===========================================\n\n\n\n'
);

module.exports = {
  log
};
