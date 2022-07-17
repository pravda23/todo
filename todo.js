const arr = ["1", "2", "3"];

// selectors

const input = document.querySelector(".input");
const inputBtn = document.querySelector(".inputBtn");
const list = document.querySelector(".list");

// event listener
inputBtn.addEventListener("click", addEntry);

// add single entry
function addEntry(e) {
  e.preventDefault();
  input.placeholder = "";

  // IS INPUT FIELD BLANK?
  // TRUE
  if (input.value === "") {
    input.placeholder = "Please enter something.";

    // FALSE
  } else {
    // IS NEW TASK A UNIQUE ENTRY?

    // assume new task is unique until scanning arr proves otherwise

    const isUnique = (currentTask) => currentTask !== input.value;

    const uniqueEntry = arr.every(isUnique);

    // FALSE
    if (uniqueEntry === false) {
      //   input.placeholder = "You've already added that task.";
      console.log("You've already added that task.");
      input.placeholder = "";
    } else {
      // TRUE
      // create single entry
      const singleEntry = document.createElement("div");
      singleEntry.classList.add("singleEntry");

      // create li
      const entryText = document.createElement("li");
      entryText.innerText = input.value;
      entryText.classList.add("entryText");
      singleEntry.appendChild(entryText);
      arr.push(input.value);

      // create checked button
      const checkedButton = document.createElement("button");
      checkedButton.classList.add("btn-checked");
      checkedButton.innerHTML = '<i class="fas fa-check"></i>';
      singleEntry.appendChild(checkedButton);

      // create trash button
      const trashButton = document.createElement("button");
      trashButton.classList.add("btn-trash");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      singleEntry.appendChild(trashButton);

      // append singleEntry to list container, clear form
      list.appendChild(singleEntry);
      input.value = "";
    }
  }
  console.log(arr);
}
// mark as checked and delete

addEventListener("click", (e) => {
  // check item
  if (e.target.classList.contains("btn-checked")) {
    e.target.classList.toggle("btn-done");
  }

  // delete item
  if (e.target.classList.contains("btn-trash")) {
    e.target.parentElement.remove();
    const indexOfItemToRemove = arr.indexOf(e.target.parentElement.textContent);
    arr.splice(indexOfItemToRemove, 1);
  }
});
