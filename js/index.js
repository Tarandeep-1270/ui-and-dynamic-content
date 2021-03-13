// Getting the references 
// to the interactive elements of the markup:
let input = document.getElementById('item');
let add = document.getElementById('add');
let list = document.getElementById('list');

function addItem() {
	
	input.value = input.value.trim();

	// if the user input is not empty:
		if(input.value!=""){
			
			// Create the new list Item
			let li = document.createElement('li');

			// Collect the user input from the input-tag
			li.innerText = input.value;

			// Attach list item to the unordered list 
			list.appendChild(li);

			// Clear the text-field
			input.value="";

			document.getElementById("error").style.display = "none";
			document.getElementById("feedback").style.display = "block";
		}
		else{
			document.getElementById("feedback").style.display = "none";
			document.getElementById("error").style.display = "block";
		}

		// Setting cursor back to textbox after adding item or an error;
		document.getElementById('item').focus();
}

add.addEventListener('click', addItem);