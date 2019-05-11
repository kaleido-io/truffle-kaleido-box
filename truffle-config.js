const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      provider: () => {
        const appCred = 'yourappcred'; // from application credential widget
        const connectionURL = 'nodeConnectionURL'; // without protocol (https://)
        return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
  mocha: {
    enableTimeouts: false
  }
};
