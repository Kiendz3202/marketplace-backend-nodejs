const uploadImage = async (req, res) => {
	const res = req.body;
	res.status(200).json(res);
};

module.exports = { uploadImage };
