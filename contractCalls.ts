import { ethers, BigNumber } from "ethers";
// const abi = require("./abi.json");
// import { constants } from "./constants";

export class ContractCalls {
  // A Provider (in ethers) is a class which provides an abstraction
  // for a connection to the Ethereum Network. It provides read-only
  // access to the Blockchain and its status.

  // Return a provider object using JSON-RPC API
  getProvider = async (): Promise<ethers.providers.JsonRpcProvider> => {
    // Write your code here
    return {} as ethers.providers.JsonRpcProvider;
  };

  // A Contract is an abstraction which represents a connection
  // to a specific contract on the Ethereum Network, so that
  // applications can use it like a normal JavaScript object.

  // Return a contract instance
  getContractInstance = async (): Promise<ethers.Contract> => {
    // Write your code here
    return {} as ethers.Contract;
  };

  // We can use the contract instance for read-only methods
  // Return the wallet address of the contract's owner
  getContractOwner = async (): Promise<string> => {
    // Write your code here
    return "";
  };

  // In our contract (ERC-721) each user's message stored is
  // an unique token (NFT).
  // Return the balance (token amount) for the walletAddress received
  getMessageTokenBalance = async (
    walletAddress: string
  ): Promise<BigNumber> => {
    // Write your code here
    return {} as BigNumber;
  };

  // A Signer is a class which (usually) in some way directly or
  // indirectly has access to a private key, which can sign messages
  // and transactions to authorize the network to charge your account
  // ether to perform operations.

  // Return a wallet (signer class) instance connected to the provider
  getWallet = async (): Promise<ethers.Wallet> => {
    // Write your code here
    return {} as ethers.Wallet;
  };

  // To write the blockchain we need to connect the contrat with
  // the signer & mint the message received
  // Return the tx data
  addMessage = async (message: string) => {
    // Write your code here
    return {
      hash: "",
    };
  };

  // Get the message for messageToken received
  // use getMessage method from the contract and pass it the messageTokenId
  // Return the message
  checkMessage = async (messageToken: number): Promise<string> => {
    // Write your code here
    return "";
  };

  // Get the messageTokenIds for the wallet
  // You need to own at least one message
  // Use getMyMessageIds() to get your messages ids
  // Return an array with the ids stringified
  getMyMessageTokens = async (): Promise<string[]> => {
    // Write your code here
    return [];
  };

  // Transfer a message to the address received (see transferFrom API)
  // Only the message owner can transfer. Be sure the wallet has tokens &
  // the messageTokenId belongs to the wallet user
  // Return the transaction object
  TransferMessage = async (to: string) => {
    // Write your code here
    return {};
  };
}
