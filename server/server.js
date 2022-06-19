const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const URI = process.env.DB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const dbConnection = mongoose.connection;

dbConnection.once('open', () => console.log('Connected to MongoDB'));

const entriesRouter = require('./routes/entries');
app.use('/entries', entriesRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));