require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hidden knife bottom shuffle'; 
let testAccounts = [
"0x9b279723c9965ec6a9e992c314c8dfc90b44b3e2ae1b566db6737c214363d92a",
"0x8c6c1d7daaac75b71ef07ec5c42a851e48bdf9b20f67aa697eb0c12a9acaef25",
"0xed13ec6dccf07d622ccca91f0e1f34d8863b679a8e8ee88a8effaa31a4272b96",
"0xc0d66d8f0b22673094f447f71a33ba28e164a23a23c1b07b2fd0a16959f0c473",
"0xb678bddb3e552bb2f3d3366861ae183a4e93b50489d89f23c0a762c86418215b",
"0x69dcf858294f983f17ff33eaa5d0eae1fa472bc0a386fbe3adedbd720f89feae",
"0x5e8b432969c635782d51b422702d363bdb6b169dc250e026c4c7687916c8fe45",
"0xfbf1ffb070e19477d83a799d20c62e5ba616b67bf98a7a0309689af465084f50",
"0x624a569b41a7e9f331f322a5d0a12c39435d1e9f12a19991a6bf39b1782839bf",
"0x985732ac4461c632b7302e9c9b69f341bd81b89fa2873cc3c169d87479c7cc7e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

