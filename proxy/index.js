const express = require('express');
const path = require('path');

const app = express();
const PORT = 3005;

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/:id', express.static(path.join(__dirname, './public')));

  app.use(
    '/listings/header/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/gallery/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/reviews/:id',
    createProxyMiddleware({
      target: 'http://localhost:3003',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/moreplaces/:id',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    })
  );


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));