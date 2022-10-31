const ethers = require('ethers');
import { getNeuteredNode, getHDWalletInstance, getEthereumWallet, MNEMONIC } from './HDWalletExercises';

describe('HD Wallet Exercises', () => {
    test('Getting an HD instance', () => {
        const HDInstance = getHDWalletInstance();
        
        expect(HDInstance.mnemonic.phrase).toStrictEqual(MNEMONIC);
        expect(ethers.utils.id(HDInstance.path)).toStrictEqual('0xdaba8c984363447d18bf8210079973ac8fc1ce76864315b5baacf246bf6e72f6');
    })

    test('Getting different ethereum accounts using a derivation path', () => {
        let ethereumHDInstance = getEthereumWallet();

        expect(ethereumHDInstance.mnemonic.phrase).toStrictEqual(MNEMONIC);
        expect(ethers.utils.keccak256(ethereumHDInstance.address)).toStrictEqual('0x6ba93fa93549eb0bbdcdba7b10e079dfbb84843c847439b9c05d3a1b4c13f602');

        ethereumHDInstance = getEthereumWallet(2);
        expect(ethers.utils.keccak256(ethereumHDInstance.address)).toStrictEqual('0xc2bdc8c2ff60a4885316b970691db80665e2a33f72a814779b44b66c56648cef');
    })
    
    test('Getting a secure hd node (private key & mnemonic removed)', () => {
        const neuteredNode = getNeuteredNode();
        
        expect(neuteredNode.privateKey).toStrictEqual(null);
        expect(neuteredNode.mnemonic).toStrictEqual(null);
        expect(ethers.utils.keccak256(neuteredNode.address)).toStrictEqual('0x6ba93fa93549eb0bbdcdba7b10e079dfbb84843c847439b9c05d3a1b4c13f602');
        expect(ethers.utils.keccak256(neuteredNode.publicKey)).toStrictEqual('0xe89d9468ee140eb2e07da0dbed72f207638f05dd955189d1261e1140b476ca0c');
    })
})

