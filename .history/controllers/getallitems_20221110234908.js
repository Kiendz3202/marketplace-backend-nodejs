const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const getAllItems = async () => {
	const listAllItems = await Nft.find().select(
		'+_id +__v +createdAt +updatedAt'
	);
	resizeBy.status(200).json(listAllItems);
};

module.exports = { getAllItems };
