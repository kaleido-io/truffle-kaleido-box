const HTTPProviderRateLimitRetry = require('./lib/http-provider-rate-limit-retry')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
	  solc: {evmVersion: 'homestead'}
  },
  networks: {
    development: {
      provider: () => {
        const appCred = 'zzifdotjy6:SwDT6cG0CjqrbmDs9KeSxFn_TiQYHub_AXpPaX1nKhU'; // from application credential widget
        const connectionURL = 'zzgdffh067-zzf8kcbtal-rpc.dev2.photic.io'; // without protocol (https://)
        return new HTTPProviderRateLimitRetry(`https://${appCred}@${connectionURL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  },
mocha: {
enableTimeouts: false,
	bail: true,
	timeout: 600000
}
};
