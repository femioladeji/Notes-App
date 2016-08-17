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
        return this.notes[note_id];
    }
}

var myNote = new NotesApplication('Femi Oladeji');
myNote.createANote('This is my first note');
myNote.createANote('Adding another note for crying out loud');
myNote.listAllNotes();