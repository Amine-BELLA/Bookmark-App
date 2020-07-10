var form= document.querySelector('#form-content');
var table= document.querySelector('#table-content');
var tableBody= document.querySelector('#table-content-body');

// Adding Events Listeners
form.addEventListener('submit',runEvent);
table.addEventListener('click', deleteRow);

// Add row

function runEvent(e) {
  e.preventDefault();
  var newTitle= document.querySelector('#form-content #info-title').value;
  var newAuthor= document.querySelector('#form-content #info-author').value;
  var newIsbn= document.querySelector('#form-content #info-isbn').value;

  // Verifying if the inputs are not empty
  if (newTitle==='' || newAuthor==='' || newIsbn==='') {
    alert ('Please fill the form !');
    return false;
  }
  else {
    var deleteBtn= document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    var row= table.insertRow(1);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
    var cell4= row.insertCell(3);
    cell1.innerHTML= newTitle;
    cell2.innerHTML= newAuthor;
    cell3.innerHTML= newIsbn;
    cell4.appendChild(deleteBtn);
    // Reset input's values
    $("#info-title").val("");
    $("#info-author").val("");
    $("#info-isbn").val("");
    return true;
  }
}

// Delete row

function deleteRow(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    cell1.style.display="none";

  }
}
