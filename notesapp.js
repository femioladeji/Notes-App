class Notes {
    constructor(noteContent, authorName){
        this.noteContent = noteContent;
        this.author = authorName;
    }
}

class NotesApplication {
    constructor(authorName) {
        this.author = authorName;
        this.notes = [];
    }
    
    createANote(note) {
        if (note instanceof Notes) {
            this.notes.push(note);
        }else{
            console.log('That should be an invalid note');
        }
        
    }
    
    listAllNotes() {
        for(var id = 0; id < this.notes.length; id++){
            console.log('Note ID: '+id+'\n\n'+this.notes[id].noteContent+'\n\nBy Author '+this.notes[id].author+'\n\n');
        }
    }
    
    getANote(note_id) {
        if(this.notes[note_id] === undefined){
            return ('Note does not exist');
        }
        return this.notes[note_id].noteContent;
    }
    
    searchNotes(searchString) {
        var returnString = 'Showing results for '+searchString+'\n';
        var count = 0;
        for(var id = 0; id < this.notes.length; id++) {
            if(this.notes[id].noteContent.indexOf(searchString) !== -1) {
                returnString += 'Note ID: '+id+'\n\n'+this.notes[id].noteContent+'\n\nBy author '+this.notes[id].author+'\n';
                count++;
            }
        }
        if(count === 0){
            returnString += '\n No result found for the search';
        }
        return returnString;
    }
    
    deleteANote(note_id) {
        if(this.notes[note_id] === undefined){
            return ('Invalid note id');
        }
        this.notes[note_id] = null;
    }
    
    editANote(note_id, note_content) {
        if(this.notes[note_id] === undefined){
            return ('Invalid note id');
        }
        this.notes[note_id].noteContent = note_content;
    }
}

var myNote = new NotesApplication('Femi Oladeji');
var note1 = new Notes('G-Ramos has kinda been a saviour today', 'G-Ramos');
myNote.createANote(note1);
var note2 = new Notes('this learning is a bit intense', 'Chidiebere');
myNote.createANote(note2);

myNote.listAllNotes();
myNote.getANote(3)

console.log(myNote.searchNotes('G-Ramos'))


