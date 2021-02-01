const express = require('express');
const app = express();
require('./database');

(async function main() {
  app.use(require('./routes/index'));
  
  await app.listen(3000);
  console.log('Server on port ', 3000);
})();