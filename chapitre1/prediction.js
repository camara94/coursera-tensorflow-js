const testVal = tf.tensor2d( [5.8, 2.7, 5.1, 1.9], [1, 4] );
const prediction = model.predict( testVal );
 prediction.map( (m, i) => {
     console.log( m )
 } )