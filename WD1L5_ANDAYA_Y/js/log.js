//Login using Conditional Statement
//1. Retrieve data from the localStorage
//2. Cehck if the localStorage is not null/blank
//3. Split the String Data => Array => assign as variables

function loginUser() {
    let savedUser = localStorage.getItem("savedUser");
    
    if(savedUser === null) {
        document.getElementById("logMessage").innerHTML =
            "No user found. Register first!";
        return;
    }

    //split the data then re assign
    let userData = savedUser.split(" | "); //an array

	//retrieve username and password at the location of the array
	let old_name = userData[0];
	let old_uname = userData[2];
	let old_password = userData[4];
	
	//retrieve the user input via login form
	let login_uname = document.getElementById("login_uname").value;
	let login_pword = document.getElementById("login_pword").value;
	
	//check credentials with conditional statement
	if (login_uname === old_uname && login_pword === old_password) {
		alert("Welcome " + old_name + "! You may now add items.");
		
		window.location.href = "list.html";
	} else {
		document.getElementById("logMessage").innerHTML =
		"Invalid User Credentials!";
	}
}