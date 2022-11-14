const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');
const Nft = require('../model/nftModel');

const nft = require('../model/nftModel');

const getAllItems = async () => {
	const listAllItems = await Nft.find().select(
		'+_id +__v +createdAt +updatedAt'
	);
};

module.exports = { getAllItems };
