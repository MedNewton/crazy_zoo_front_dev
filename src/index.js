import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli, mainnet, polygon, polygonMumbai } from 'wagmi/chains'
import { alchemyProvider } from "wagmi/providers/alchemy";
// import { NetworkContractsContextProvider } from './context/providers/contractProvider'

const chains = [arbitrumGoerli];

const apiKey = "Qg-FtBXZr0sZeieqGOg1HoR1ma6MscWF";



// Wagmi client
const { publicClient } = configureChains(chains, [alchemyProvider({ apiKey })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ apiKey, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


//old implementation
// const { provider } = configureChains(chains, [alchemyProvider({ apiKey })])
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: w3mConnectors({ apiKey, version: 1, chains }),
//   provider
// })
// const ethereumClient = new EthereumClient(wagmiClient, chains)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter >
    <WagmiConfig config={wagmiConfig}>
        <ScrollToTop />
        <App />
    </WagmiConfig>

    <Web3Modal
      projectId={apiKey}
      ethereumClient={ethereumClient}
      themeMode="light"

      themeColor="green"
      themeBackground='themeColor'
    />

  </BrowserRouter>
);

