const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.art', { title: 'Express Art Template' });
})

module.exports = router;