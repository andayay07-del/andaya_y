//Create the funtion that creates the list
function addItem() {
    let item = document.getElementById("item_name").value;
    let qty = document.getElementById("item_qty").value;

    //what if the field are blank, error handler
    if (item == "" || qty == "") {
        alert("Please enter both item details!");
        return;
    }

    //set as variable ng <p> of the grocery list
    let groceryList = document.getElementById("groceryList");

    //create a new list via DOM
    let newItem = document.createElement("li");
    newItem.innerHTML = item + " - QTY: " + qty;

    //add new item to the existing list
    groceryList.appendChild(newItem);

    //clear the fields after adding new item
    document.getElementById("item_name").value = "";
    document.getElementById("item_qty").value = "";
}

//Create a function that clears the list
function clearList() {
    let groceryList = document.getElementById("groceryList");

    //clear list
    if (groceryList) {
        groceryList.innerHTML = "";
    }
}