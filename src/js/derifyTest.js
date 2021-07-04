const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const { abi } = require('../contracts/DerifyExchange.json')
const configs = require('./configs')

const provider = new HDWalletProvider('105711ea43a66d6d0ed598e25b8325ce76d306a4e5bf3971be1d148f2dc8d692'
  , 'https://kovan.infura.io/v3/8d457d825a444564af73f2d8f8199275')

const web3 = new Web3('https://kovan.infura.io/v3/')
web3.setProvider(provider)

const contract = new web3.eth.Contract(abi, '0xFb7297591A440b29CAc98DAe6bBcBD73B353b27c')
async function testSpotPrice (price) {
  var accounts = await web3.eth.getAccounts()
  console.log('Accounts:' + accounts)
  var tokenEth = '0xf3a6679b266899042276804930b3bfbaf807f15b'
  var res1 = await contract.methods.setSpotPrice(tokenEth, price).send({
    from: accounts[0],
    gasPrice: 1e9
  })
  console.log('setSpotPrice: ')
  console.log(res1)
  var res2 = await contract.methods.getSpotPrice(tokenEth).call()
  console.log('getSpotPrice: ' + res2)
}

testSpotPrice(244450000000)

// function addScript(src){
//     var jqjs = document.createElement('script')
//     jqjs.src=src
//
//
//     document.body.appendChild(jqjs)
// }
//
// addScript('http://libs.baidu.com/jquery/2.0.0/jquery.min.js')
// addScript('http://unpkg.com/web3@latest/dist/web3.min.js')
// addScript('http://localhost:8080/DerifyExchange.json')
//
// var web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
// var web3 = new Web3(web3Provider)
// web3.setProvider(web3Provider)
// let contract = new web3.eth.Contract(ABI.abi, '0xFb7297591A440b29CAc98DAe6bBcBD73B353b27c')
//
