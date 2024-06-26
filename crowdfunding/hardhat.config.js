/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: SEPOLIA_RPC_URL,
        accounts: [PRIVATE_KEY],
        chainId: 11155111,
        // blockConfirmations: 6,
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
