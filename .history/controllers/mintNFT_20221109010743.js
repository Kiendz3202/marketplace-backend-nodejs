const mintNFT = async (req, res) => {
	const data = req.files;
	res.status(200).json(data);
};

module.exports = { mintNFT };
