import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  avalancheFuji,
  baseGoerli,
  bscTestnet,
  goerli,
  optimismGoerli,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import "../styles/globals.css";

// chainの設定
const { chains, publicClient } = configureChains(
  [
    avalancheFuji,
    baseGoerli,
    bscTestnet,
    goerli,
    optimismGoerli,
    polygonMumbai,
  ],
  [
    publicProvider(),
  ]
);

// Walletの設定を取得
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "573d60ae210e8d772ee485c4483cff78",
  chains,
});

// wagmiの設定
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

/**
 * MyApp Component
 * @param {*} param0 
 * @returns 
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />;
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
