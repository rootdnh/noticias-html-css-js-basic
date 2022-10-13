const express = require('express');
const app = express();
const db = require('./models/connection_db')
const cors = require('cors');
const routes = require('./routes');
app.use(express.json());

app.use(cors({
    origin: ['http://127.0.0.1:5500']
}))

app.use(routes);
app.listen(3003); 