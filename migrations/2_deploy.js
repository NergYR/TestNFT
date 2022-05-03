const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function (deployer) {
  deployer.deploy(ERC721PresetMinterPauserAutoId,
    "Hello NFT",
    "HelloNFT",
    "https://my-json-server.typicode.com/NergYR/TestNFT"
  )};
