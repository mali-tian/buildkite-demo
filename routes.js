const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.send('Hello World!')
});

router.get('/heartbeat', (req, res) => {
  res.json({
    successful: true,
  });
});

router.all('*', (req, res, next) => {
  next(new Error(`Unsupported ${req.method} to ${req.url}`));
});

module.exports = router;
