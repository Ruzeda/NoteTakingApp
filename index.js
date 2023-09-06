const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// function to show notes in the input box //

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes;

// function to update the notes in local storage //

function updateStorage() {
    localStorage.setItem("notes", notesContainer,innerHTML);
}

// function to create a button with click element //

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "data:image/jpeg;base64,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";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tageName == "p"){
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
    }
})

// Get references to HTML elements //

const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const categorySelect = document.getElementById('categorySelect');
const searchInput = document.getElementById('searchInput');
const homeNotesList = document.getElementById('homeNotes');
const workNotesList = document.getElementById('workNotes');
const schoolNotesList = document.getElementById('schoolNotes');
const healthNotesList = document.getElementById('healthNotes');
const financesNotesList = document.getElementById('financesNotes');

// Function to add a new note //

function addNote() {
    const noteText = noteInput.value.trim();
    const category = categorySelect.value;

    if (noteText === '') {
        return;
    }

// lists the categories of notes //

    const listItem = document.createElement('li');
    listItem.textContent = noteText;

    switch (category) {
        case 'Home':
            homeNotesList.appendChild(listItem);
            break;
        case 'Work':
            workNotesList.appendChild(listItem);
            break;
        case 'School':
            schoolNotesList.appendChild(listItem);
            break;
        case 'Health':
                healthNotesList.appendChild(listItem);
            break;
        case 'Finances':
                    financesNotesList.appendChild(listItem);
            break;
        default:
            // Default to Home category //
            homeNotesList.appendChild(listItem);
    }

    // Clear the input field //
    noteInput.value = '';
}

// Event listener for form submission //
noteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addNote();
});

// Function to search for notes //
function searchNotes() {
    const searchTerm =
    searchInput.value.trim().toLowerCase();
}

// look through all notes and hide those that don't match the search term //

const allNotes = [...homeNotesList.children, ...workNotesList.children, ...schoolNotesList.children, ...financesNotesList.children, ...healthNotesList.children];
allNotes.forEach(note => {
    const noteText = note.textContent.toLowerCase();
    if (noteText.includes(searchTerm)) {
        note.computedStyleMap.display = 'block';
    } else {
        note.computedStyleMap.display = 'none';
    }
})

