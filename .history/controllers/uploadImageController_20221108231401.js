const uploadImage = async (req, res) => {
	res.status(200).json({
		name: 'kien',
		age: '12',
	});
};

module.exports = { uploadImage };
