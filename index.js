const api      = require('termux-api').default;
const express  = require( 'express' );
const app      = express();

app.get( '/', ( req, res ) => {
 api.createCommand()
    .toast()
    .setText('Can you see me?')
    .shortDuration()
    .build()
    .run();

 res.send( 'Were in Android world.' );
});

app.listen( 3000, function () {
 console.log( 'Running Android world...' );
});
