const convertedData = trainingData.map( ( { xs, ys } ) => {
    const labels = [
        ys.species === 'setosa' ? 1 : 0,
        ys.species === 'virginica' ? 1 : 0,
        ys.species === 'versicolor' ? 1 : 0
    ];

    return  { xs: Object.values( xs ), ys: Object.values(labels) }
} ).batch( 10 );