const newItem = document.getElementById("new-item");
const addItemButton = document.getElementById("add-item");
const removeLastButton = document.getElementById("remove-last");
const remainingItemsText = document.getElementById("remaining-items");
const itemList = document.getElementById("item-list");

let remainingCount = 0;
// console.log(remainingCount  );
function addItem() {
  const newItemText = newItem.value;
  if (newItemText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = newItemText;
    console.log(listItem);

    // Create a delete button for the item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeItem);
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
    // Append the list item to the list
    itemList.appendChild(listItem);
    remainingCount++;
    console.log(remainingCount);

    listItem.addEventListener("click", () => {
      colorChange(listItem, deleteButton);
    });
    // Update the remaining items text
    updateRemaining();
    // Clear the input field
    newItem.value = "";
  } else {
    alert("Either list is empty or invalind input");
  }
}
//remove lastItem
function removeLastItem() {
  //   const items = itemList.querySelectorAll("li");
  //   console.log(typeof items);
  //   console.log(items);

  //   items.forEach(function (listItem) {
  const items = document.querySelectorAll("li:not(.complete)");

  if (items.length > 0) {
    const lastItem = items[items.length - 1];

    // console.log(lastItem);
    itemList.removeChild(lastItem);
    remainingCount--;
    updateRemaining();
  }
}

function removeItem() {
  const listItem = this.parentNode;
  //   console.log(listItem);
  //   itemList.remove(listItem);
  //   console.log(listItem);

  remainingCount--;
  updateRemaining();
  //remove the item
  itemList.removeChild(listItem);
}
function colorChange(listItem, deleteButton) {
  //   console.log(deleteButton); just to check
  if (!listItem.classList.contains("complete")) {
    // Don't remove completed items
    listItem.classList.add("complete");
    deleteButton.remove();
  }
}

function updateRemaining() {
  remainingItemsText.textContent = `Remaining items: ${remainingCount}`;
}

addItemButton.addEventListener("click", addItem);
removeLastButton.addEventListener("click", removeLastItem);
