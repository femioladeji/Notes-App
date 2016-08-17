class Note {
    /**
     * the constructor method
     * @param noteContent a string of the noteContent
     * @param authorName a string of the author
     */
    constructor(noteContent, authorName){
        this.noteContent = noteContent;
        this.author = authorName;
    }
}

class NotesApplication {
    /**
     * constructor for the NotesApplication
     */ 
    constructor() {
        this.notes = [];
    }
    
    /**
     *createANote method is used to add a new note
     * @param note is an instance of note
     */
    createANote(note) {
        if (note instanceof Notes) {
            this.notes.push(note);
        }else{
            console.log('That should be an invalid note');
        }
        
    }
    
    /**
     * this method list all the notes. No param is required
     */ 
    listAllNotes() {
        for(var id = 0; id < this.notes.length; id++){
            if(this.notes[id] !== undefined) {
                console.log('Note ID: '+id+'\n'+this.notes[id].noteContent+'\nBy Author '+this.notes[id].author+'\n');
            }
        }
    }
    
    /**
     * this method gets the string details of a particular note
     * @oaran note_id is an integer of the 
     */ 
    getANote(note_id) {
        if(this.notes[note_id] === undefined){
            return ('Note does not exist');
        }
        return this.notes[note_id].noteContent+'\nBy'+this.notes[note_id].author;
    }
    
    /**
     * this function loops through the array to check if any noteContent contains a string
     * @param searchString is the substring we are searching for
     */ 
    searchNotes(searchString) {
        var returnString = 'Showing results for '+searchString+'\n';
        var count = 0;
        for(var id = 0; id < this.notes.length; id++) {
            if(this.notes[id].noteContent.indexOf(searchString) !== -1) {
                returnString += 'Note ID: '+id+'\n'+this.notes[id].noteContent+'\nBy author '+this.notes[id].author+'\n';
                count++;
            }
        }
        if(count === 0){
            returnString += '\n No result found for the search';
        }
        return returnString;
    }
    
    /**
     * this method simply sets the note_id to null but checks if the id exist
     * @param note_id is the index
     */ 
    deleteANote(note_id) {
        if(this.notes[note_id] === undefined){
            return ('Invalid note id');
        }
        this.notes[note_id] = null;
    }
    
    /** 
     * this method is used to edit a note_id
     * @param note_id is the index
     * @param note_content is the new content
     */ 
    editANote(note_id, note_content) {
        if(this.notes[note_id] === undefined){
            return ('Invalid note id');
        }
        this.notes[note_id].noteContent = note_content;
    }
}

var myNote = new NotesApplication();

var note1 = new Note('G-Ramos has kinda been a saviour today', 'G-Ramos');

myNote.createANote(note1);

var note2 = new Note('this learning is a bit intense', 'Chidiebere');

myNote.createANote(note2);

myNote.listAllNotes();

myNote.getANote(3)

console.log(myNote.searchNotes('G-Ramos'))

var note3 = new Note('My TA is Toyin', 'Toyin');
//deleteANote()


