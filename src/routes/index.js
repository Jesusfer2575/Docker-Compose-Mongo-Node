const { 
  Router
} = require('express');
const router = Router();

router.get('/test', (req, res) => {
  res.json({
    name: 'Adrian Fernandez',
    message: 'Docker Compose'
  })
});

module.exports = router;