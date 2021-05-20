// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

/// @title Boilerplate code for a protocol which will interact with an ERC20 token.
/// @author Anderson Singh

contract SimpleProtocol {

    using SafeMath for uint256;

    IERC20 private token; 
    mapping(address=>uint256) private balances; 

    constructor(address _token) {
        token = IERC20(_token);
    }

    /// @notice user must first approve _amount before a call to desposit function.
    function deposit(uint256 _amount) external {
        token.transferFrom(msg.sender, address(this), _amount);
        balances[msg.sender] = balances[msg.sender].add(_amount);
    } 

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, 'insufficent balance.');
        balances[msg.sender] = balances[msg.sender].sub(_amount);
        token.transfer(msg.sender, _amount);
    }
}