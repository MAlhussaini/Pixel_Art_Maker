
// Select color input
cell = document.querySelector('table');
cell.addEventListener('click',
function colorizeCells(event) {
  if (event.target.nodeName === 'TD') {
    let color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
  
  }
});

function makeGrid() {
  // Your code goes here!
  
  const myNode = document.querySelector("table");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  
    
  let columns = document.getElementById("inputWidth").value;
  let rows = document.getElementById("inputHeight").value;

  table = document.querySelector('table')
  for (let n = 0; n < rows; n++) {
    let row = document.createElement('tr');
    for (let m = 0; m < columns; m++) {
      let col = document.createElement('td');
      row.appendChild(col);
    }
    table.appendChild(row);
  }
};
