const express = require( 'express' );
const {APIController} = require( './../controllers/apiController' );
const APIRouter = express.Router();



APIRouter
    .route( '/notes' )
    .get( APIController.getAll )
    .post(APIController.create)



module.exports = { APIRouter };