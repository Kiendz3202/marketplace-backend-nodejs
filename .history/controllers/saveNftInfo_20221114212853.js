// const {
// 	marketplace,
// 	wana,
// 	nft,
// } = require('../helpers/contractProvider/contractProvider');
const { nft } = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const saveNftInfo = async (req, res) => {
	const data = req.body;
	const uri = data.uri;
	const nftInfo = data.nftInfo;

	Nft.findOneAndUpdate(
		{ tokenId: nftInfo.tokenId },
		{
			name: nftInfo.name,
			description: nftInfo.description,
			price: nftInfo.price,
			image: nftInfo.image,
			uri: uri,
		},
		{ upsert: true }
	).catch((err) => console.log(err));

	res.status(200).json(data);
};

const updatePurchase = async (req, res) => {
	const data = req.body;
	Nft.findOneAndUpdate(
		{ itemId: data.itemId },
		{
			sold: data.sold,
			buyer: data.buyer,
		},
		{ upsert: true }
	).catch((err) => console.log(err));

	res.status(200).json(data);
};

module.exports = { saveNftInfo, updatePurchase };
