var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var exec = require('child_process').exec;
var fs = require('fs');
var gcn_list = require('../gcn/gcn_list');
const { isValidJSON } = require('../gcn/gcn_list');
const { construct_gcn_cmd } = require('../gcn/gcn_list');
=======
const { isValidJSON, res_to_json } = require('../gcn/gcn_list');
const { construct_gcn_run } = require('../gcn/gcn_list');
const { execSync } = require('child_process');
>>>>>>> b0dce9a1e1dd2d8cd1c6cf695b2bc0f16662eb97

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
<<<<<<< HEAD
    var gcn_cmd = construct_gcn_cmd(req.body.dataset);
    console.log('GCN COMMAND: ' + gcn_cmd);

    exec(gcn_cmd, (err, stdout, stderr) => {
        fs.writeFile('./gcn/output.txt', stdout, (err) => {
            if (err) return console.log(err);
        });
    });
    res.send('I have received your packet successfully.@gcn.js');
=======
    var gcn_run = construct_gcn_run(req.body.dataset);

    var result = execSync(gcn_run).toString();
    var reply = res_to_json(result);
    console.log(reply);
    res.json(reply);
>>>>>>> b0dce9a1e1dd2d8cd1c6cf695b2bc0f16662eb97
});

module.exports = router;