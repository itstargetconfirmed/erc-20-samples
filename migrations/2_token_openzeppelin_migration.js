const Token = artifacts.require("TokenOpenZeppelin");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
