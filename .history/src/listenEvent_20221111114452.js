const ethers = require('ethers');
const marketABI = require('../config/abi/Marketplace.json');
// const marketABI = require('../config/abi/usdt.json');

const listenEvent = async () => {
	const marketAdress = '0x52e58FE7254FD0964F309239ad5F753b63246518';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);

	contract.on('Bought', (from, to, value, event) => {
		let info = {
			from,
			to,
			value: ethers.utils.formatUnits(value, 18),
			event,
		};

		console.log(JSON.stringify(info, null, 4));
	});
};

module.exports = { listenEvent };
