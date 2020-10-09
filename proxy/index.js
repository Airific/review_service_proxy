const express = require('express');
const path = require('path');
const app = express();
const PORT = 3006;


const { createProxyMiddleware } = require('http-proxy-middleware');


app.use('/:id', express.static(path.join(__dirname, './public')));



  app.use(
    '/listings/header/:id',
    createProxyMiddleware({
      target: 'http://3.101.88.230',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/gallery/:id',
    createProxyMiddleware({
      target: 'http://3.101.88.230',
      changeOrigin: true,
    })
  );
  app.use(
    '/listings/reviews/:id',
    createProxyMiddleware({
      target: 'http://3.89.20.244',
      changeOrigin: true,
    })
  );

  app.use(
    '/listings/moreplaces/:id',
    createProxyMiddleware({
      target: 'http://3.101.118.54',
      changeOrigin: true,
    })
  );


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));