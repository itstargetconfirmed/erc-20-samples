// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/// @title An ERC20 token example using OpenZeppelin.
/// @author Anderson Singh

contract TokenOpenZeppelin is ERC20 {

    /// @dev on creation, mint one million tokens for creator.
    constructor() ERC20('Token', 'TOK') {
        _mint(msg.sender, 1000000000000000000000000);
    }
}