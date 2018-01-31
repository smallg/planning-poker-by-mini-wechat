var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.json({statusCode: 200, message: 'ok', data: {content: 'users'}});
});

module.exports = router;
