const noteBtn = document.querySelector(".newnote");

function createNote(){
    const container = document.getElementById("border");
    let newNote = document.createElement("span");
    newNote.className = "note";
    newNote.
    container.appendChild(newNote);
    container.insertBefore(newNote, container.children[1]);
    newNote.setAttribute("contenteditable", "true");
    newNote.focus()
}

function editNotes(){

}
//Event Listeners
noteBtn.addEventListener("click", createNote);
