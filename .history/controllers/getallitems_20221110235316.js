const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const getAllItems = async () => {
	const listAllItems = await Nft.find().select(' -createdAt -updatedAt -__v');
	resizeBy.status(200).json(listAllItems);
};

module.exports = { getAllItems };
