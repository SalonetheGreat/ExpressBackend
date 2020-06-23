var express = require('express');
var router = express.Router();

const { isValidJSON, res_to_json } = require('../gcn/gcn_list');
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

    var result = execSync(gcn_run).toString();
    var reply = res_to_json(result);
    res.json(reply);
});

module.exports = router;
