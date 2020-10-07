const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;


app.use('/:id', express.static(path.join(__dirname, './public')));



// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/:id',
//     createProxyMiddleware({
//       target: 'http://localhost:3003',
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/:id',
//     createProxyMiddleware({
//       target: 'http://localhost:3001',
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/:id',
//     createProxyMiddleware({
//       target: 'http://localhost:3002',
//       changeOrigin: true,
//     })
//   );
// };



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));