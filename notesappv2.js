class Note {
    /**
     * the constructor method
     * @param {string }noteContent a string of the noteContent
     * @param {string} authorName a string of the author
     */
    constructor(noteContent, authorName){
        this.noteContent = noteContent;
        this.author = authorName;
        this.noteid = 0;
    }
}

class NotesApplication {
    /**
     * constructor for the NotesApplication
     */ 
    constructor() {
        this.notes = [];
        this.currentId = 1;
    }
    
    /**
     *createANote method is used to add a new note
     * @param {note} note is an instance of note
     */
    createANote(note) {
        if (note instanceof Note) {
            note.noteid = this.currentId;
            this.notes.push(note);
            this.currentId++;
        }else{
            console.log('That should be an invalid note');
        }
        
    }
    
    /**
     * this method list all the notes. No param is required
     */ 
    listAllNotes() {
        if(this.notes.length > 0) {
            console.log('Total notes are '+this.notes.length);
        }else{
            console.log('No note to list yet');
        }
        for(var count = 0; count < this.notes.length; count++) {
            if(this.notes[count] !== undefined) {
                console.log('Note ID: '+this.notes[count].noteid+'\n'+this.notes[count].noteContent+'\nBy Author '+this.notes[count].author+'\n');
            }
        }
    }
    
    /**
     * this method gets the string details of a particular note
     * @param {number} note_id is a unique description
     */ 
    getANote(note_id) {
        for(var count = 0; count < this.notes.length; count++) {
            if(this.notes[count].noteid == note_id) {
                return (this.notes[count].noteContent+'\nBy Author '+this.notes[count].author+'\n');
            }
        }
        return ('Note does not exist');
        
    }
    
    /**
     * this function loops through the array to check if any noteContent contains a string
     * @param {string} searchString is the substring we are searching for
     */ 
    searchNotes(searchString) {
        var returnString = 'Showing results for '+searchString+'\n';
        var count = 0;
        for(var id = 0; id < this.notes.length; id++) {
            if(this.notes[id].noteContent.indexOf(searchString) !== -1) {
                returnString += 'Note ID: '+this.notes[id].noteid+'\n'+this.notes[id].noteContent+'\nBy author '+this.notes[id].author+'\n';
                count++;
            }
        }
        if(count === 0) {
            returnString += '\n No result found for the search';
        }
        return returnString;
    }
    
    /**
     * this method simply sets the note_id to null but checks if the id exist
     * @param note_id is the index
     */ 
    deleteANote(note_id) {
        for(var count = 0; count < this.notes.length; count++) {
            if(this.notes[count].noteid == note_id) {
                this.notes.splice(count, 1);
                return;
            }
        }
        console.log('The note you want to delete does not exist');

    }
    
    /** 
     * this method is used to edit a note_id
     * @param note_id is the index
     * @param note_content is the new content
     */ 
    editANote(note_id, note_content) {
        for(var count = 0; count < this.notes.length; count++) {
            if(this.notes[count].noteid == note_id) {
                this.notes[count].noteContent = note_content;
            }
        }
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

myNote.createANote(note3);

myNote.deleteANote(5);

console.log('Below is a full list of the notes');

myNote.listAllNotes();

console.log('After deleting the note with id 1');

myNote.deleteANote(1);

myNote.listAllNotes();

console.log('Editing note with id 3');

myNote.editANote(3, 'Toyin told me to make some modifications to my code');

myNote.getANote(3);

console.log('Maryam almost burst my bubble by getting a note with id 0.5');
myNote.getANote(0.5);
//deleteANote()
console.log('\n\n');
var note4 = new Note('Adding a new note to check the id after deleting anothr note', 'Femi');

myNote.createANote(note1);

myNote.listAllNotes()

