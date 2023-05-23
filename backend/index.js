const epxress = require('express');
const app = epxress();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3002;

require('dotenv').config();

const figuresRouter = require('./routes/figures');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(epxress.json());
app.use(cors());

app.use('/api/figures', figuresRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
