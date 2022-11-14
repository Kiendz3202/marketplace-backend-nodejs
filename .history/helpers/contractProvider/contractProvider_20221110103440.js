const ethers = require('ethers');
const marketplaceABI = require('../../config/abi/Marketplace.json');
const wanaABI = require('../../config/abi/WANA.json');
const nftABI = require('../../config/abi/NFT.json');

const provider = new ethers.providers.WebSocketProvider(
	process.env.ALCHEMY_WEBSOCKET
);

const marketplace = new ethers.Contract(
	process.env.MARKETPLACE_ADDRESS,
	marketplaceABI,
	provider
);
const wana = new ethers.Contract(process.env.WANA_ADDRESS, wanaABI, provider);
const nft = new ethers.Contract(process.env.NFT_ADDRESS, nftABI, provider);

module.exports = { marketplace, wana, nft };
