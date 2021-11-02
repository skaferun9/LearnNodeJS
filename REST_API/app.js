const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 5600;

const feedRoute = require('./routes/feed');

app = express();
app.use(cors())
// app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use('/feed', feedRoute)

app.listen(port, () => {
    console.log("Server is run at port " + port)
})