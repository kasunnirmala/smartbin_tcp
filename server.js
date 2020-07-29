const express = require('express');
const app = express();

require('./db');

app.get('/value/:val', async (req, res) => {
  
    console.log(req.params.categoryID);


});


app.listen(6666);

