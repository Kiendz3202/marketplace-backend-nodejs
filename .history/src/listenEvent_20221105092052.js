const ethers = require('ethers');
// const marketABI = require('../config/abi/Marketplace.json');
const marketABI = require('../config/abi/usdt.json');

async function listenEvent() {
	const marketAdress = '0x23D5Fd932944Cef35Aaba8368f373f78B4A91F6A';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);
}
