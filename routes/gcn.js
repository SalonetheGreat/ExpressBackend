var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;
var fs = require('fs');
var gcn_list = require('../gcn/gcn_list');
const { isValidJSON } = require('../gcn/gcn_list');
const { construct_gcn_run } = require('../gcn/gcn_list');
const { execSync } = require('child_process');

/* GET gcn page. */
router.get('/', function (req, res, next) {
    res.send('I have received your GET request.@gcn.js');
});

/* POST to gcn page */
router.post('/',function (req, res, next) {
    // check if JSON is valid
    if (!isValidJSON(req.body)) {
        res.send('please send a valid json!');
        return;
    }

    // if ok, then construct gcn commands
    var gcn_run = construct_gcn_run(req.body.dataset);
    console.log('GCN COMMAND: ' + gcn_run);

    var result = execSync(gcn_run).toString();
    console.log(result);
    res.send('I have received your packet successfully.@gcn.js');
});

module.exports = router;