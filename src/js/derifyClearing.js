const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const { abi } = require('../contracts/DerifyExchange.json')
const configs = require('./configs')

const provider = new HDWalletProvider(configs.privateKey, configs.kovanUrl + configs.infuraId)
const web3 = new Web3(configs.kovanUrl)
web3.setProvider(provider)

const contract = new web3.eth.Contract(abi, configs.derifyExchangeAddress)

async function checkClearing (price) {
  var accounts = await web3.eth.getAccounts()
  console.log('Account:' + accounts[0])

  // set spotPrice for testnet
  var tokenEth = configs.kovanTokenWETH
  var res = await contract.methods.setSpotPrice(tokenEth, price).send({
    from: accounts[0],
    gasPrice: 1e9
  })
  console.log('setSpotPrice: ')
  console.log(res)

  var res1 = await contract.methods.checkOrderedPositions().send({
    from: accounts[0],
    gasPrice: 1e9
  })
  console.log('checkOrderedPositions: ')
  console.log(res1)

  var res2 = await contract.methods.checkLiquidatePositions().send({
    from: accounts[0],
    gasPrice: 1e9
  })
  console.log('checkLiquidatePositions: ' + res2)
  console.log(res2)
}

// okex api to get spotPrice, only for test
async function updatePrice () {
  const https = require('https')
  const options = {
    hostname: 'app.levex.pro',
    port: 443,
    path: '/api/v5/market/index-candles?instId=ETH-USD',
    method: 'GET'
  }

  console.log('send ok request')
  const req = https.request(options, res => {
    console.log(`status code: ${res.statusCode}`)

    res.on('data', d => {
      var resJson = JSON.parse(d.toString())
      var price = parseFloat(resJson.data[1][4])
      console.log('price:' + price)
      checkClearing(price)
    })
  })

  req.on('error', error => {
    console.error(error)
  })

  req.end()
}

// schedule task
async function main () {
  try {
    const schedule = require('node-schedule')
    const scheduleCronstyle = () => {
      schedule.scheduleJob('0 * * * * *', () => {
        console.log('scheduleCronstyle:' + new Date())
        updatePrice()
      })
    }

    scheduleCronstyle()
  } catch (e) {
    console.error(e)
  }
}

main()
