var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

/* Functions */
function construct_gcn_run (dataset) {
    var gcn_path = path.join(__dirname, '..', 'gcn');
    console.log(gcn_path);
    console.log(path.join(gcn_path, 'dataset', 'gcn', dataset));
    return `${path.join(gcn_path, 'gcn')} \ 
        --feature_file=${path.join(gcn_path, 'dataset', 'gcn', dataset)}.svmlight \
        --graph_file=${path.join(gcn_path, 'dataset', 'gcn', dataset)}.graph \
        --split_file=${path.join(gcn_path, 'dataset', 'gcn', dataset)}.split`;
}

/* GET gcn page. */
router.get('/', function (req, res, next) {
    res.send('I have received your GET request.@gcn.js');
});

router.post('/',function (req, res, next) {
    console.log('I have received your packet. @gcn.js');
    var gcn_run = construct_gcn_run(req.body.dataset);
    console.log(gcn_run);
    // console.log(typeof gcn_run);
    exec(gcn_run, (err, stdout, stderr) => {
        var output = fs.createWriteStream('./gcn/output.txt');
        fs.writeFile('./gcn/output.txt', stdout, (err) => {
            if (err) return console.log(err);
        });
    });
    res.send('I have received your packet.@gcn.js');
});

module.exports = router;