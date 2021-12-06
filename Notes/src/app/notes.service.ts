import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient) { }

  fetchNotes(): any{
    return this._http.get( "api/notes" );
  }

  createNote( newNote: any ): any {
    return this._http.post( "/api/notes", newNote )
  }
}
