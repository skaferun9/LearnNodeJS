const express = require('express');
const port = 5600;

const feedRoute = require('./routes/feed');

app = express();
app.use('/feed', feedRoute)

app.listen(port, () => {
    console.log("Server is run at port " + port)
})