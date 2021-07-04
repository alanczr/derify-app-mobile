module.exports = {
  derifyExchangeAddress: process.env.DERIFY_EXCHANGE_ADDRESS || '0xFb7297591A440b29CAc98DAe6bBcBD73B353b27c',
  derifyFactoryAddress: process.env.DERIFY_FACTORY_ADDRESS || '0x8159Aba294C409351ADCa054b1A7Ba72b53DC408',
  derifyDerivativeWETHAddress: process.env.DERIFY_DERIVATIVE_WETH_ADDRESS || '0x051a8ceAdfEcb87314C84cE0147Bd6bF2b1b8f31',

  privateKey: process.env.PRIVATE_KEY || '105711ea43a66d6d0ed598e25b8325ce76d306a4e5bf3971be1d148f2dc8d692',
  infuraId: process.env.INFURA_ID || '8d457d825a444564af73f2d8f8199275',

  kovanUrl: process.env.KOVAN_URL || 'https://kovan.infura.io/v3/',

  kovanTokenWETH: process.env.KOVAN_TOKEN_WETH || '0xf3a6679b266899042276804930b3bfbaf807f15b',
  kovanTokenWBTC: process.env.KOVAN_TOKEN_WBTC || '0x7afe7373126eb5ef766caad2072c4a87810fbfa3'
}
