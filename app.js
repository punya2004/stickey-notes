showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes != null) {
    notesObj = JSON.parse(notes);  
  } else {
    notesObj = [];
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
})

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes != null) {
    notesObj = JSON.parse(notes);
  } else {
    notesObj = [];
  }
  let keepNote = "";
  notesObj.forEach(function (element, index) {
    keepNote += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id=${index} onClick="deleteNotes(this.id)" class="btn">Delete Note</button>
    </div>
</div>`
  });

  let showNote = document.getElementById("notes");
  if (notesObj.length != 0) {
    showNote.innerHTML = keepNote;
  } else {
    showNote.innerHTML = `No notes. please add notes by using 'Add a Note'.`
  }
}

function deleteNotes(index){
  let notes = localStorage.getItem("notes");
  if (notes != null) {
    notesObj = JSON.parse(notes);
  } else {
    notesObj = [];
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}