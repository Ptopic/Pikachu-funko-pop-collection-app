const db = require('../db/db');

exports.getFigures = async (req, res) => {
	const selectFigures = 'SELECT * FROM figures';

	db.query(selectFigures, async (err, result) => {
		if (err || result.length < 1) {
			console.log(err);
			return res.status(400).send({
				success: false,
				error: 'Figures not found :(',
			});
		} else {
			return res.status(200).send({
				success: true,
				data: result,
			});
		}
	});
};

exports.updateFigure = async (req, res) => {
	const { id } = req.body;
	console.log(id);
	// Check if figure exists

	const checkFigure = `SELECT isCollected FROM figures WHERE id = ${id}`;

	db.query(checkFigure, async (err, result) => {
		if (err || result.length < 1) {
			return res.status(400).send({
				success: false,
				error: 'Figures not found :(',
			});
		} else {
			const curCheckedStatus = result[0]['isCollected'];
			const updateFigures = `UPDATE figures SET isCollected = ${
				curCheckedStatus == 1 ? 0 : 1
			} WHERE id = ${id}`;

			db.query(updateFigures, async (err, result) => {
				if (err || result.length < 1) {
					return res.status(400).send({
						success: false,
						error: 'Update error :(',
					});
				} else {
					return res.status(200).send({
						success: true,
						message: `Figure with id ${id} updated`,
					});
				}
			});
		}
	});
};
