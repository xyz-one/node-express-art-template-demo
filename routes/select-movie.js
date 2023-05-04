const express = require('express');
const router = express.Router();

router.get('/select-movie', (req, res) => {
    res.render('select-movie.art', { title: 'Express Art Template' });
})

module.exports = router;