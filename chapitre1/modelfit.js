 await model.fitDataset( {
    convertedData,
    {
        epochs: 100,
        callbacks: {
            onEpochEnd: async ( epoch, logs ) => {
                console.log( 'E: ' + epoch + ' Loss: ' + logs.loss );
            }
        }
    }
} );