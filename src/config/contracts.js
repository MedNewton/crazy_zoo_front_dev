import { ChainId } from '@usedapp/core';

const ContractsConfig = {
  [ChainId.Mumbai]: {
    ZOOTOKEN : process.env.REACT_APP_TOKEN_ADDRESS_MUMBAI,
    ZOONFT : process.env.REACT_APP_NFT_ADDRESS_MUMBAI,
    ZOOSTAKING : process.env.REACT_APP_STAKING_ADDRESS_MUMBAI,
    UNISWAPINTERMEDIARY : process.env.REACT_APP_UNISWAPINTERMEDIARY_ADDRESS_MUMBAI,
    PRESALE : process.env.REACT_APP_PRESALE_ADDRESS_MUMBAI,
    USDC : process.env.REACT_APP_USDT_ADDRESS_MUMBAI
  },
  [ChainId.ArbitrumGoerli]: {
    ZooToken : process.env.ZOOTOKEN_ADDRESS_ARBITRUMGOERLI,
    UniswapIntermediary : process.env.UNISWAPINTERMEDIARY_ADDRESS_ARBITRUMGOERLI,
    ZOOSTAKING : process.env.ZOOSTAKING_ADDRESS_ARBITRUM,
    PRESALE : process.env.PRESALE_ADDRESS_ARBITRUM,
    UNISWAPINTERMEDIARY : process.env.UNISWAPINTERMEDIA_ADDRESS_ARBITRUM,
    USDT : process.env.USDT_ADDRESS_ARBITRUM
  }
};

export default ContractsConfig;
