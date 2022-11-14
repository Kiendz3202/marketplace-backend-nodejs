const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');

const mintNFT = async (req, res) => {
	const data = req.body;
	res.status(200).json(data);
	console.log(data);
};

module.exports = { mintNFT };
