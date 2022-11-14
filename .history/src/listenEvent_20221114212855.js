const ethers = require('ethers');
const marketABI = require('../config/abi/Marketplace.json');
const Nft = require('../model/nftModel');
// const marketABI = require('../config/abi/usdt.json');

const listenEvent = async () => {
	const marketAdress = '0x52e58FE7254FD0964F309239ad5F753b63246518';
	const provider = new ethers.providers.WebSocketProvider(
		process.env.ALCHEMY_WEBSOCKET
	);

	const contract = new ethers.Contract(marketAdress, marketABI, provider);
	// const block = await provider.getBlockNumber();
	// const transferEvents = await contract.queryFilter(
	// 	'Offered',
	// 	block - 100000,
	// 	block
	// );
	// const lastEventIndex = transferEvents.length - 1;
	// console.log(transferEvents[lastEventIndex].args.tokenId.toNumber());
	// console.log(transferEvents[lastEventIndex]);
	console.log('----------------------------------------------------------');

	contract.on('Offered', (itemId, nft, tokenId, price, sender, event) => {
		if (event) {
			Nft.findOneAndUpdate(
				{ tokenId: tokenId.toNumber() },
				{
					itemId: itemId.toNumber(),
					tokenId: tokenId.toNumber(),
					nft: nft,
					seller: seller,
					buyer: '',
					sold: false,
				},
				{ upsert: true }
			).catch((err) => console.log(err));
		}
	});
	contract.on(
		'Bought',
		(itemId, nft, tokenId, price, seller, buyer, event) => {
			if (event) {
				Nft.findOneAndUpdate(
					{ tokenId: tokenId.toNumber() },
					{
						itemId: itemId.toNumber(),
						tokenId: tokenId.toNumber(),
						nft: nft,
						seller: seller,
						buyer: buyer,
						sold: true,
					},
					{ upsert: true }
				).catch((err) => console.log(err));
			}
		}
	);
};

module.exports = { listenEvent };
