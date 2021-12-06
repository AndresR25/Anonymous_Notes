const {NoteModel} = require( './../models/note' );

const APIController = {
    getAll : function( request, response ){
        NoteModel.getAll()
            .then( notes => {
                response.status( 200 ).json( notes );
                
            });
    },

    create: function(request, response){
        console.log(request.body)
        let { content } = request.body;
        if(content.length >= 3 ){
            let note = {content}
            NoteModel
            .create(note)
            .then(note => 
                {
                    response.status( 201 ).json( note ); 
                })
            .catch(error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
        }


        else{
            response.statusMessage = "The note must be at least 3 characters, please fix this"
                response.status( 404 ).end();

        }

    },
}

module.exports = { APIController };