const {
	marketplace,
	wana,
	nft,
} = require('../helpers/contractProvider/contractProvider');

const mintNFT = async (req, res) => {
	const data = req.body;
	const uri = data.uri;
	const metadata = data.metadata;
	//mint nft
	// await (await nft.mint(uri)).wait();
	// //get tokenId of new nft
	// const id = await nft.tokenCount();
	// //approve marketplace to spend nft
	// await (await nft.setApprovalForAll(marketplace.address, true)).wait();
	res.status(200).json(metadata);
	console.log(data);
};

module.exports = { mintNFT };
