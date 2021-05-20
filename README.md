# Sample ERC20 Token

## TokenOpenZeppelin.sol 
This contract provides a sample implementation of an ERC20 token using OpenZeppelin. You can find associated tests in test folder.


## SimpleProtocol.sol
This contract provides the boilerplate code for a protocol using an ERC20 token. It provides two basic functions deposit and withdraw which can be modified based on the required usecase. 

Note: The user must first call the approve function of the ERC20 token before attempting a deposit. You can find associated tests in test folder.


## Requirements
- Truffle
- OpenZeppelin Contracts
- Blockchain Environment - Eg: Ganache