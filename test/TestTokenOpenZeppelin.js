const Token = artifacts.require('TokenOpenZeppelin')

contract('OpenZeppelin ERC20 Token Test', async accounts  => {

    it('first account balance should be 1000000 tokens', async () => {
        // get contract instance.
        const token = await Token.deployed(); 

        // use web3 to get the address of the first account. 
        const addresses  = await web3.eth.getAccounts(); 
        const first_address = addresses[0];

        // get balance of first account. 
        const balance = await token.balanceOf.call(first_address);

        // there are 18 decimals in the token (1000000 * 10^18).
        assert.equal(balance, '1000000000000000000000000');
    });

    it('second account balance should be 50 tokens after transfer from first account.', async () => {
        // get contract instance
        const token = await Token.deployed(); 

        // use web3 to get the addresses of the first and second account. 
        const addresses = await web3.eth.getAccounts(); 
        const first_address = addresses[0];
        const second_address = addresses[1];
        
        // transfer.
        const tx = await token.transfer(second_address, '50000000000000000000', {
            from: first_address
        });

        // balance of second account.
        const balance = await token.balanceOf.call(second_address);

        assert.equal(balance, '50000000000000000000');
    });

});