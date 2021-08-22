const model = tf.sequential();
model.add( tf.layers.dense( { inputShape: [4], activation: 'sigmoid', units: 5 } ) );
model.add( tf.layers.dense({ activation: 'softmax',  units: 3 } ) );
model.compile( { loss: 'categoricalCrossentropy', optimizer: tf.train.adam( 0.06 ) } )
model.summary()