const ethers = require('ethers');
const marketABI = require('../config/abi/Marketplace.json');
// const marketABI = require('../config/abi/usdt.json');

const listenEvent = async () => {
	const marketAdress = '0x23D5Fd932944Cef35Aaba8368f373f78B4A91F6A';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);

	contract.on('0x60806040', (from, to, value, event) => {
		let info = {
			from,
			to,
			value: ethers.utils.formatUnits(value, 6),
			event,
		};

		console.log(JSON.stringify(info, null, 4));
	});
};

module.exports = { listenEvent };
