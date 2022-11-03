// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}
    mapping (address => uint[]) public ownerMessages;

    function safeMint(string memory uri) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getMyMessageIds() public view returns(uint[] memory) {
        uint len = balanceOf(msg.sender);
        uint[] memory arr = new uint[](len);

        for (uint i = 0; i < len; i++){
            arr[i] = ownerMessages[msg.sender][i];
        }

        return arr;
    }

    function getMessage(uint num) public view returns(string memory) {
        return tokenURI(num);
    }

    function _beforeTokenTransfer(
        address from_,
        address to_,
        uint256 tokenId
    ) internal virtual override {
        bool foundIndex;
        if (from_ != address(0)) {
            for (uint i = 0; i < ownerMessages[from_].length-1; i++){
                if (!foundIndex && ownerMessages[from_][i] == tokenId) {
                    foundIndex = true;
                }
                if (foundIndex) {
                    ownerMessages[from_][i] = ownerMessages[from_][i+1];
                }
            }
            delete ownerMessages[from_][ownerMessages[from_].length-1];
        }

        if (balanceOf(to_) == ownerMessages[to_].length) {
            ownerMessages[to_].push(tokenId);
        } else {
            ownerMessages[to_][balanceOf(to_)] = tokenId;
        }
    }
}
