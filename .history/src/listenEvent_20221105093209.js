const ethers = require('ethers');
// const marketABI = require('../config/abi/Marketplace.json');
const marketABI = require('../config/abi/usdt.json');

const listenEvent = async () => {
	const marketAdress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);

	contract.on('Transfer', (from, to, value, event) => {
		let info = {
			from,
			to,
			value: ethers.utils.formatUnits(value, 6),
			event,
		};

		console.log(JSON.stringify(info, null, 4));
	});
	console.log('hi');
};

module.exports = { listenEvent };
