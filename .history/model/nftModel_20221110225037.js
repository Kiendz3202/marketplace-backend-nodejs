const mongoose = require('mongoose');

const nftSchema = mongoose.Schema(
	{
		name: { type: 'String' },
		description: { type: 'String' },
		price: { type: 'String' },
		image: { type: 'String' },
		itemId: { type: 'String' },
		tokenId: { type: 'String' },
		nft: { type: 'String' },
		seller: { type: 'String' },
		sold: { type: 'Boolean' },
	},
	{
		timestamps: true,
	}
);

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;
