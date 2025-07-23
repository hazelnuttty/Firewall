const express = require('express');
const limiter = require('./lib/limiter');
const firewall = require('./lib/firewall');
const settings = require('./settings.json');
const path = require('path');

const app = express();

app.use(firewall(settings));
app.use(limiter(settings.rateLimit));

app.get(settings.verifyPath, (req, res) => {
  res.sendFile(path.join(__dirname, 'verif/human.html'));
});

app.get('/', (req, res) => {
  res.send('✅ Protected Server Active');
});

app.listen(3000, () => {
  console.log('🛡️ Anti-DDoS server running on http://localhost:3000');
});
