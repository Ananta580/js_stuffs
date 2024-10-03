var content = document.getElementById("content");

// 1.
// A function that removes all text fields from the webpage.
function removeAllTextFields() {
  var allTextFields = document.querySelectorAll('input[type="text"]');
  console.log(allTextFields);
  for (var i = 0; i < allTextFields.length; i++) {
    allTextFields[i].parentNode.removeChild(allTextFields[i]);
  }
}

// 2.
//A function that creates and appends a paragraph to the page.
// The text for the paragraph should be: “New Paragraph Added”.
// Set the font color to be green and the font size to 12.
function addParagraphToPage() {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = "New Paragraph Added";
  paragraph.style.color = "green";
  paragraph.style.fontSize = "12px";
  content.appendChild(paragraph);
}

// 3.
//A function that takes one parameter and uses it as the id for an existing element in the page.
// Then, removes that element from the page.
// If such id does not exist on the page, an error message should be displayed in the console.
function removeElmentById(id) {
  var element = document.getElementById(id);
  if (element) {
    element.parentNode.removeChild(element);
    return;
  }
  console.error("Element with given id doesn't exists");
}

// 4.
// A code to add a click event to the button “Click Me” on the page.
// Once the button is clicked, a paragraph will be added to the page.
// Assume that the button already exists on the page.
var addParaBtn = document.getElementById("paraAddBtn");
addParaBtn.addEventListener("click", function () {
  addParagraphToPage();
});

// 5.
// Create a button on the page “Hover Your Mouse Here”.
// Once the mouse hovers on this button, the background of the button should get changed to red.
// Once the mouse leaves this button area, the background color should get changed back to the default value.
// Once the button is clicked, a duplicated of this button should be added to the page with exact the same event properties.
initializeButtonEvents(document.getElementById("hoverMeBtn"));

function initializeButtonEvents(button) {
  const defaultColor = button.style.backgroundColor;
  button.addEventListener("mouseenter", function () {
    button.style.backgroundColor = "red";
  });
  button.addEventListener("mouseleave", function () {
    button.style.backgroundColor = defaultColor;
  });

  button.addEventListener("click", function () {
    const newButton = button.cloneNode(true);
    newButton.style.backgroundColor = defaultColor;
    content.appendChild(newButton);
    initializeButtonEvents(newButton);
  });
}

// 6.
// Use JavaScript to display the coordinates of mouse pointer at all times.
// Use a <div> element and display the values inside this div.
document.body.addEventListener("mousemove", function (event) {
  var mouseCordinateDiv = document.getElementById("mouseCordinateDiv");
  mouseCordinateDiv.innerHTML = `X: ${event.pageX} , Y: ${event.pageY}`;
});

// 7.
//Read two integers, namely ‘r’ and ‘c’ using <input> tag (input validate required using JavaScript)
// and use a button labeled “Create Table”. Once the button is clicked,
// use JavaScript to create a table with “r” number of rows and “c” number of columns.
// Note: You are required to create the table header and table body.
// Fill in the cells of the table with random numbers between 1 and 100.
function createTable() {
  var row = document.getElementById("r").value;
  var col = document.getElementById("c").value;
  if (!row || !col || row == 0 || col == 0) {
    alert("Invalid values for row and column");
    return;
  }

  var existingTable = document.getElementsByTagName("table");
  if (existingTable.length > 0) {
    existingTable[0].parentNode.removeChild(existingTable[0]);
  }

  var table = document.createElement("table");

  let thead = "";
  let tbody = "";
  for (let i = 0; i < row; i++) {
    tbody += "<tr>";
    for (let j = 0; j < col; j++) {
      if (i == 0) {
        thead += `<th>Column C${j + 1}</th>`;
      }
      tbody += `<td>R${i + 1} | C${j + 1}</td>`;
    }
    tbody += "</tr>";
  }

  table.innerHTML = `
    <thead>
    <tr>${thead}</tr>
    </thead>
    <tbody>
    ${tbody}
    </tbody>
    `;

  document.body.appendChild(table);
}
