# AxelarRepo

Axelar を学習するためのリポジトリです。

## Axelar とは

インターオペラビリティを実現させるプロトコル。トークンの送信とメッセージの送信を異なるチェーン間で行うことができる。  
利用するためにはそれぞれのチェーンに用意されている Gateway と gasreciver コントラクトが必要である。  
一覧は、[https://docs.axelar.dev/resources/testnet](https://docs.axelar.dev/resources/testnet)にて確認ができる。

## Solidity 用の SDK

@axelar-network/axelar-gmp-sdk-solidity

## 動かし方(cross-chain-sample の方)

- インストール

  ```bash
  cd cross-chain-sample/hardhat && yarn
  ```

- コンパイル

  ```bash
  yarn compile
  ```

- mumbai へのデプロイ

  ```bash
  yarn deploy:mumbai
  ```

  デプロイ結果

  ```bash
  Airdrop contract deployed to 0x452D352bc79B7c1eF23AF28D4CF841267b55DE1B
  ```

- fujiTestnet へのデプロイ

  ```bash
  yarn deploy:avalancheFujiTestnet
  ```

  デプロイ結果

  ```bash
  Airdrop contract deployed to 0x90bE6f494bbf4a6a02BAc00cEb4b15093A9CB79a
  ```

### 参考文献

1. [Axelar Docs](https://axelar.network/developers)
2. [Axelar for developers](https://docs.axelar.dev/dev/intro)
3. [サンプルリポジトリ](https://github.com/mashharuki/axelar-examples)
4. [サンプルプロジェクト](https://github.com/mashharuki/cross-chain-airdrop-dapp)
5. [How to Build a Cross-Chain Airdrop DApp With Solidity, Next.js and Axelar](https://axelar.network/blog/cross-chain-airdrop-dapp-tutorial)
