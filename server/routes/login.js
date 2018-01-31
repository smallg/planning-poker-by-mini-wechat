var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const config = require('../config');

/* GET home page. */
router.get('/login', function (req, res, next) {
    var connection = mysql.createConnection({
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.pass,
        database: config.mysql.db,
        charset: config.mysql.char,
        multipleStatements: true
    });
    connection.connect();

    connection.query("INSERT INTO `cSessionInfo` (`open_id`, `uuid`, `skey`, `create_time`, `last_visit_time`, `session_key`, `user_info`)\n" +
            "VALUES\n" +
            "\t('1', 'u1', 's1', '2018-01-29 15:15:01', '2018-01-29 15:15:01', 's1', 'u1');\n", function (err, rows, fields) {
        res.json({statusCode: 200, message: 'ok', data: {content: 'login success'}});
    });

    connection.end()
});

module.exports = router;
