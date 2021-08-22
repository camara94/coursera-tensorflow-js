const csvUrl = './../iris.csv';
const trainingData = tf.data.csv( csvUrl, {
    columnConfigs: {
        species: {
            isLabel: true
        }
    }
} );