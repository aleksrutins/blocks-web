const express = require('express'), app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {

})