// https://eth-ropsten.alchemyapi.io/v2/dVXKmBuLm9T4vDk-DeeWouzpd8qY2dE0

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dVXKmBuLm9T4vDk-DeeWouzpd8qY2dE0',
      accounts: ['069ad445bd30041dbce507372594c591af597088129898ea2983e6efc12bec44']
    }
  }
}