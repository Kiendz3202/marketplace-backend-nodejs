// const {
// 	marketplace,
// 	wana,
// 	nft,
// } = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const saveNftInfo = async (req, res) => {
	const data = req.body;
	const uri = data.uri;
	const nftInfo = data.nftInfo;

	Nft.findOneAndUpdate({ itemId: nftInfo.itemId }, {}, { upsert: true });

	res.status(200).json(data);
	console.log(data);
};

module.exports = { saveNftInfo };
