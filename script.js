const form = document.getElementById("todoForm");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    // Validation
    if(title.trim() === "" || description.trim() === ""){
        alert("Please fill out both fields!");
        return;
    }

    // Create table row
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td><button class="delete-btn">X</button></td>
    `;

    taskList.appendChild(row);

    // Clear inputs
    form.reset();

    // Delete Function
    row.querySelector(".delete-btn").addEventListener("click", function(){
        row.remove();
    });
});
