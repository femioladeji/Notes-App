class NotesApplication {
    constructor(authorName) {
        this.author = authorName;
        this.notes = [];
    }
    
    createANote(note_content) {
        this.notes.push(note_content);
    }
    
    listAllNotes() {
        for(var id = 0; id < this.notes.length; id++){
            console.log('Note ID: '+id+'\n\n'+this.notes[id]+'\n\nBy Author '+this.author+'\n\n');
        }
    }
    
    getANote(note_id) {
        if(this.notes[note_id] === undefined){
            return ('Note does not exist');
        }
        return this.notes[note_id];
    }
    
    searchNotes(searchString) {
        var returnString = 'Showing results for '+searchString+'\n';
        for(var id = 0; id < this.notes.length; id++) {
            if(this.notes[id].indexOf(searchString) !== -1) {
                returnString += 'Note ID: '+id+'\n\n'+this.notes[id]+'\n\nBy author '+this.authorName+'\n';
            }
        }
        
        return returnString;
    }
}

var myNote = new NotesApplication('Femi Oladeji');
myNote.createANote('This is my first note');
myNote.createANote('Adding another note for crying out loud');
myNote.listAllNotes();
myNote.getANote(3)

console.log(myNote.searchNotes('cry'))


