const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./backend/routes/api');

const app = express();
app.use(bodyParser.json());
app.use('/bfhl', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
