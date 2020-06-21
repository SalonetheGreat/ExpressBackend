var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;
var fs = require('fs');
var gcn_list = require('../gcn/gcn_list');

/* GET gcn page. */
router.get('/', function (req, res, next) {
    res.send('I have received your GET request.@gcn.js');
});

/* POST to gcn page */
router.post('/',function (req, res, next) {
    console.log('I have received your packet. @gcn.js');
    var gcn_run = gcn_list.construct_gcn_run(req.body.dataset);

    exec(gcn_run, (err, stdout, stderr) => {
        fs.writeFile('./gcn/output.txt', stdout, (err) => {
            if (err) return console.log(err);
        });
    });
    res.send('I have received your packet.@gcn.js');
});

module.exports = router;