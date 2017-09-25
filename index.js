const express  = require( 'express' );
const app      = express();

app.get( '/', function ( req, res ) {
 res.send( 'Were in Android world.' );
});

app.listen( 3000, function () {
 console.log( 'Running Android world...' );
});
