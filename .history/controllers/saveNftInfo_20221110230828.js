// const {
// 	marketplace,
// 	wana,
// 	nft,
// } = require('../helpers/contractProvider/contractProvider');

const saveNftInfo = async (req, res) => {
	const data = req.body;
	// const uri = data.uri;
	// const metadata = data.metadata;
	// //mint nft
	// await (await nft.mint(uri)).wait();
	// //get tokenId of new nft
	// const id = await nft.tokenCount();
	// //approve marketplace to spend nft
	// await (await nft.setApprovalForAll(marketplace.address, true)).wait();
	// //list nft to market
	// const listedMarket = await await marketplace.listNFT(
	// 	nft.address,
	// 	id,
	// 	metadata.price
	// );
	res.status(200).json(data);
	console.log(data);
};

module.exports = { saveNftInfo };
