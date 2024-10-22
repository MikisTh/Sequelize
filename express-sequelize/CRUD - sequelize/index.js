// npm i express
//  npm i -D nodemon
// mkdir server routes
// touch server/index.js routes/index.js
// npm start-dev
// mkdir controllers && touch controllers/index.js



require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));