var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;
var fs = require('fs');

/* Functions */
function construct_gcn_run (dataset) {
    return `./gcn/gcn \
        --feature_file=./gcn/dataset/gcn/${dataset}.svmlight \
        --graph_file=./gcn/dataset/gcn/${dataset}.graph \
        --split_file=./gcn/dataset/gcn/${dataset}.split`
}

/* GET gcn page. */
router.get('/', function (req, res, next) {
    res.send('I have received your GET request.@gcn.js');
});

/* POST to gcn page */
router.post('/',function (req, res, next) {
    console.log('I have received your packet. @gcn.js');
    var gcn_run = construct_gcn_run(req.body.dataset);

    exec(gcn_run, (err, stdout, stderr) => {
        fs.writeFile('./gcn/output.txt', stdout, (err) => {
            if (err) return console.log(err);
        });
    });
    res.send('I have received your packet.@gcn.js');
});

module.exports = router;