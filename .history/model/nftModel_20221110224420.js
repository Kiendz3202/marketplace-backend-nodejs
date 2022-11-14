const mongoose = require('mongoose');

const nftSchema = mongoose.Schema(
	{
		name: { type: 'String' },
		nameId: { type: 'String' },
		symbol: { type: 'String' },
		image: { type: 'String' },
		priceChange1hPercent: { type: 'String' },
		priceChange24hPercent: { type: 'String' },
		priceChange7dPercent: { type: 'String' },
		priceChange14dPercent: { type: 'String' },
		priceChange30dPercent: { type: 'String' },
		priceChange200dPercent: { type: 'String' },
		priceChange1yPercent: { type: 'String' },
		volume24h: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		marketCap: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		high24h: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		low24h: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		ath: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		atl: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		fullyDilutedValuation: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		circulatingSupply: { type: 'String' },
		totalSupply: { type: 'String' },
		maxSupply: { type: 'String' },
		currentPrice: {
			usd: { type: 'String' },
			vnd: { type: 'String' },
		},
		rank: { type: 'String' },
	},
	{
		timestamps: true,
	}
);

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;
