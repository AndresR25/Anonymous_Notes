const mongoose = require( 'mongoose' );

const NoteSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        minlength : 3
    }},  { timestamps: true }
);


const Note = mongoose.model( 'notes', NoteSchema );

const NoteModel = {
    create : function( newNote ){
        return Note.create( newNote );
    },
    getAll : function(){
        return Note.find();
    }

};

module.exports = {NoteModel};