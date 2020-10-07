const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 3005;

app.use('/:id', express.static(path.join(__dirname, './public')));




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));