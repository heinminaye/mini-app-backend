const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

sequelize.sync({ alter: true }).then(() => { console.log('Database synced') });

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
