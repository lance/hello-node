const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';

app.use(express.static('views'));

app.listen(port, ip, _ => console.log(`Application listening on ${ip}:${port}`));