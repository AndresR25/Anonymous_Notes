const express = require( 'express' );
const path = require( 'path' );
const {APIRouter} = require( './routes/apiRouter' );

require( './config/database' );
const app = express();


app.use(express.static(path.join(__dirname, "/Notes/dist/Notes")));


app.use( express.urlencoded({extended:true}) );
app.use( express.json() );

app.use( '/api', APIRouter );

app.all( '*', function( request, response ){
    response.sendFile( path.resolve( './Notes/dist/Notes/index.html' ) );
});

app.listen( 8181, function(){
    console.log( "running in port 8181." );
});