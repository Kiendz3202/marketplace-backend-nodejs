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
		{ itemId: nftInfo.itemId },
		{
			name: nftInfo.name,
			description: nftInfo.description,
			price: nft.price,
			image: nftInfo.image,
			itemId: nftInfo.itemId,
			tokenId: nftInfo.tokenId,
			nft: nftInfo.nft,
			seller: nftInfo.seller,
			sold: nftInfo.sold,
			uri: uri,
		},
		{ upsert: true }
	).catch((err) => console.log(err));

	res.status(200).json(data);
	console.log(data);
};

module.exports = { saveNftInfo };
