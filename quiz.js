// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. The object should have two key/value pairs.


var height = document.getElementById("height");

var character = document.getElementById("character");

var info = {};

var button = document.getElementById("click");
button.addEventListener("click", argument);

function heightAlert () {
	if (info.height === "" || info.height === " " || info.height === 0) {
			alert("Both fields must have a value");
	}
}
function characterAlert () {
	if (info.character === "" || info.character===" ") {
		alert("Both fields must have a value");
	}
}


function argument(click) {
	click.preventDefault();
	info.height = parseInt(height.value);
	info.character = character.value;
	console.log(info.character.length);
		if (info.character.length === 1) {
			tree(info)
		};
	characterAlert();
}





// function enter(event) {
// 	if(event.which === 13){
// 		argument(event);
// 	}
// }

var finishedLog = "";


// "ben".repeat( )

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// ***** DONT NEED THIS BECAUSE BUTTON SUBMIT WITHIN THE FORM ALREADY CONNECTS THE ENTER BUTTON **********

// height.addEventListener("keydown", enter);
// character.addEventListener("keydown", enter);


// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *        spaces= 6 char= 1  (0)  spaces = height(7) - i - 1  character = i(0) + 1
//      ***       spaces= 5 char= 3  (1)  spaces = height(7) - i - 1  character = i(1) + 1
//     *****      spaces= 4 char= 5  (2)  spaces = height(7) - i - 1  character = i(2) + 1
//    *******     spaces= 3 char= 7  (3)  spaces = height(7) - i - 1  character = i(3) + 1
//   *********	  spaces= 2 char= 9  (4)  spaces = height(7) - i - 1  character = i(4) + 1
//  ***********	  spaces= 1 char= 11 (5)  spaces = height(7) - i - 1  character = i(5) + 1
// *************  spaces= 0 char= 13 (6)  spaces = height(7) - i - 1  character = i(6) + 1


function tree (x) {
	finishedLog = "";
	var space = " ";
	for (var i = 0; i < x.height; i++) {
		var spaces = (x.height - i) - 1;
		finishedLog += space.repeat(spaces) + x.character.repeat(i + i + 1) + "\n";
	}

	console.log(finishedLog);
};


