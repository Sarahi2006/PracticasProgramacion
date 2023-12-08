const btnNew = document.getElementById('btn')
const appNote = document.getElementById('app')

//cargar las notas existentes al cargar la pagina
getNotes().forEach((note) =>{
    const noteNew = createNote(note.id, note.content)
    appNote.insertBefore(noteNew, btnNew)
})
//Crear un elemento de nota con eventos y funcionalidades asociadas
function createNote (id, content){
    const element = document.createElement("textarea")
    element.classList.add('note');
    element.placeholder = 'Crear una nota'
    element.value = content

    element.addEventListener('dblclick', ()=> {
        const warning = confirm("Quieres eleminar esta nota?");
        if (warning){
            deleteNote(id, element)
        }
    })
    element.addEventListener('input', ()=>{
        updateNote(id, element.value)
    })
    return element
}

function deleteNote (id, element){
    const notes = getNotes().filter((note) => note.id !== id)
    saveNote(notes)
    element.remove()
}

function updateNote(id, content){
    const notes = getNotes()
    const target = notes.find((note)=> note.id === id)
    target.content = content
    saveNote(notes)
}

function addNote (){
    const notes = getNotes()
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }

    const noteNew = createNote(noteObj.id, noteObj.content);
    appNote.insertBefore(noteNew, btnNew)
    notes.push(noteObj)
    saveNote(notes)

}

function saveNote(notes){
    localStorage.setItem('note-app', JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem('note-app') || "[]")
}

btnNew.addEventListener("click", addNote)

//btnNew.addEventListener('click', addNote)