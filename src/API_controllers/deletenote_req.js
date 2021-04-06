const DeleteNote = (id) => {
    try { fetch(`http://localhost:3333/notes/${id}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}})
    .then(response => response.json())
    .then(response => console.log(response))    
    } catch(err) {console.log('can not delete note')}
}

export default DeleteNote;