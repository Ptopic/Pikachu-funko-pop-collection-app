const epxress = require('express');
const app = epxress();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const figuresRouter = require('./routes/figures');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(epxress.json());
app.use(cors());

app.use('/api/figures', figuresRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
