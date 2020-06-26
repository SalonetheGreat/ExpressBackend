body_arguments = [
    'dataset', 
    'graph-type',
    'max_iter'
];

module.exports = {
    // construct_gcn_run: (dataset) => {
    //     return `./gcn/gcn --feature_file=./gcn/dataset/gcn/${dataset}.svmlight --graph_file=./gcn/dataset/gcn/${dataset}.graph --split_file=./gcn/dataset/gcn/${dataset}.split`;
    // },
    construct_gcn_run: (body) => {
        var command = './gcn/gcn'
        for (var key of Object.keys(body)) {
            var argv;
            switch (key) {
                case 'dataset':
                    argv = `--feature_file=./gcn/dataset/gcn/${body.dataset}.svmlight --graph_file=./gcn/dataset/gcn/${body.dataset}.graph --split_file=./gcn/dataset/gcn/${body.dataset}.split`
                    break;
                default:
                    argv = `--${key}=${body[key]}`
                    break;
            }
            command += ' ' + argv;
        }
        return command;
    },

    isValidJSON: (body) => {
        try {
            for (var key of Object.keys(body)) {
                if (!body_arguments.includes(key))
                    return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    },

    res_to_json: (result) => {
        var reply = {};
        result = result.slice(result.search('test_loss')).trim();
        var res_list = result.split(/\s*[\n,]\s*/);
        res_list.forEach((value, index, array) => {
            var curr = value.split(/\s*[:]\s*/);
            reply[curr[0]] = curr[1];
        })
        return reply;
    }
}
