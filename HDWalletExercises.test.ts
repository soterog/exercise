const ethers = require("ethers");
import {
  getNeuteredNode,
  getHDWalletInstance,
  getEthereumWallet,
  MNEMONIC,
} from "./HDWalletExercises";

describe("HD Wallet Exercises", () => {
  test("Getting an HD instance", () => {
    const HDInstance = getHDWalletInstance();
    expect(HDInstance.mnemonic.phrase).toStrictEqual(MNEMONIC);
    expect(HDInstance.address).toMatch(/BA300269/);
    expect(ethers.utils.id(HDInstance.path)).toStrictEqual(
      "0xdaba8c984363447d18bf8210079973ac8fc1ce76864315b5baacf246bf6e72f6"
    );
  });

  test("Getting different ethereum accounts using a derivation path", () => {
    let ethereumHDInstance = getEthereumWallet();

    expect(ethereumHDInstance.mnemonic.phrase).toStrictEqual(MNEMONIC);
    expect(ethereumHDInstance.address).toMatch(/2633721b/);

    ethereumHDInstance = getEthereumWallet(2);
    expect(ethereumHDInstance.address).toMatch(/DBF3C95A/);
  });

  test("Getting a secure hd node (private key & mnemonic removed)", () => {
    const neuteredNode = getNeuteredNode();

    expect(neuteredNode.privateKey).toStrictEqual(null);
    expect(neuteredNode.mnemonic).toStrictEqual(null);
    expect(neuteredNode.address).toMatch(/871763ED/);
    expect(neuteredNode.publicKey).toMatch(/3623690a/);
  });
});
