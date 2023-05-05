const router = require('express').Router();

const { getFigures, updateFigure } = require('../controllers/figures');

router.get('/get-figures', getFigures, (req, res) => {
	console.log(res);
});
router.post('/update-figure', updateFigure);

module.exports = router;
