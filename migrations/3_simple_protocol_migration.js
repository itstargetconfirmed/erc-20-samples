const SimpleProtocol = artifacts.require('SimpleProtocol');
const Token = artifacts.require('TokenOpenzeppelin');

module.exports = function (deployer) {

  deployer.then(async () => {
    const token = await Token.deployed();
    await deployer.deploy(SimpleProtocol, token.address);
  });

};
