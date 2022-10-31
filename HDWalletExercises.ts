const dummyNode = {
  mnemonic: {
    phrase: ''
  },
  path: '',
  address: '',
  privateKey: '',
  publicKey: ''
}

export const MNEMONIC = 'peanut castle brave robust damage head dignity march wish right prize price';

// Documentation for HD wallet https://docs.ethers.io/v5/api/utils/

// Return an instance for a Hierarchal Deterministic wallet 
export const getHDWalletInstance = () => {
  // Write your code here
  return dummyNode;
  };

// Return an instance for a HD ethereum wallet 
// The function could receive an index to get an specific derivated ethereum wallet
export const getEthereumWallet = (addressIndex?) => {
  // Write your code here
  return dummyNode;
}

// Return an instance for a HD ethereum wallet (default path)
// The node should be secure to share it, we don't want a leak of sensible data
export const getNeuteredNode = () => {
  // Write your code here
  return dummyNode;
}
