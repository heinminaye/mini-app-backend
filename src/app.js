const express = require('express');
const cors = require('cors');
const { sequelize, User } = require('./models');
require('dotenv').config();
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync().then(() => {
  User.findAll().then(async (data) => {
    if (data.length === 0) {
      const hashedPassword = await bcrypt.hash('password', 10);
      await User.create({
        email: 'test@gmail.com',
        username: 'test',
        password: hashedPassword
      });
      console.log('Default user created');
    }
  });
});

app.get('/', (req, res) => res.send('Server running'));

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
