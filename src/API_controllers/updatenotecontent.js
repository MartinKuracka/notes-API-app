const UpdateNoteContent = (id, note) => {
    console.log('from there', id, note);
    try { fetch(`http://localhost:3333/notes/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            title: note
            })
    })
    .then(response => response.json())
    .then(response => console.log(response))    
    } catch(err) {console.log('can not post new note', err)}
}

export default UpdateNoteContent;