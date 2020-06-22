module.exports = {
    construct_gcn_run: (dataset) => {
        return `./gcn/gcn --feature_file=./gcn/dataset/gcn/${dataset}.svmlight --graph_file=./gcn/dataset/gcn/${dataset}.graph --split_file=./gcn/dataset/gcn/${dataset}.split`
    },

    isValidJSON: (body) => {
        try {
            if (body.dataset != null) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
}