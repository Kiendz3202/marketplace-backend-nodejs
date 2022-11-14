const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const getAllItems = async (req, res) => {
	const listAllItems = await Nft.find().select(' -createdAt -updatedAt -__v');
	res.status(200).json(listAllItems);
};

module.exports = { getAllItems };
