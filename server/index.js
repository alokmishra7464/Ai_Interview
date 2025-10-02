require('dotenv').config(); // import env

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// connect db
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log('Database connected successfully.');
})
.catch((e) => {
    console.log(`Database connection failed ${e}`);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});