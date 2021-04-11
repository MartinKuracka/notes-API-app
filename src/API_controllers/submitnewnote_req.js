const SubmitNote = (note) => {
    try { fetch('http://localhost:3333/notes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            title: note
            })
    })
    .then(response => response.json())
    } catch(err) {console.log('can not post new note', err)}
}

export default SubmitNote;