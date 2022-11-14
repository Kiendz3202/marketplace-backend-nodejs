const ethers = require('ethers');
// const marketABI = require('../config/abi/Marketplace.json');
const marketABI = require('../config/abi/usdt.json');

async function listenEvent() {
	const marketAdress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);
}
