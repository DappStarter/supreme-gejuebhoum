require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note outside pull install climb old tattoo'; 
let testAccounts = [
"0xbcb7c3291186d517532a9a2ab3d23a236f2273f116f1b6543832f5e93c0588b0",
"0xf754d331124045694a4d4bcf1b254d50fd7a04643f87898a71dbce3c54be77e2",
"0x97298f08ae7ac1db463289f98c2a4d10bc9a42bc0c35d3e1b8614e134cb4557d",
"0xdbf1f7222ef624ffebd157ce9c0a8a82bc57c4da5a2c3fcb6ea958b8471c729b",
"0xfe33abb73a30a33e037d029d83fdbd7c1868981439b593d90fcf7fc87103b6d1",
"0xb8964d19fba2c554723df069fb621793cc9140af284236b9d391a49a816d8a9f",
"0x7955cf15c549bdf28bbcf0507819a2e20e951961ec4daae763610b0c0f905c8e",
"0xadd52c5a6ef58b69ed807d37afdfe295be33bb225cfa3e6a601a2ef8facb0085",
"0xe11a1c986a1612d2544deec625c767051fecb4a455d01b33df564e91c1cdad78",
"0x80460661b8597f2fa127af42eb10fed819a3c605d55c029e572dc7fb5b7cf1fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
