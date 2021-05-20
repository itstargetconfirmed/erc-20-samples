const SimpleProtocol = artifacts.require('SimpleProtocol')
const Token = artifacts.require('TokenOpenZeppelin')

contract('Simple Protocol Test', async accounts  => {

    it('balance of simple protocol should be 50 tokens after transfer from first account.', async () => {

        // get contract instance.
        const token = await Token.deployed(); 
        const protocol = await SimpleProtocol.deployed();

        // use web3 to get the address of the first account. 
        const addresses  = await web3.eth.getAccounts(); 
        const first_address = addresses[0];

        // approve 50 tokens from first account.
        await token.approve(protocol.address, '50000000000000000000', {
            from: first_address
        });

        // call deposit from first account.
        await protocol.deposit('50000000000000000000', {
            from: first_address
        });

        // get balance of simple protocol.
        const balance = await token.balanceOf.call(protocol.address);


        assert.equal(balance, '50000000000000000000');
    });


});