// "use strict"


// this keyword
console.log(this);

function sum () {
	var add=2+2;
	console.log(add);
	console.log(this); 
}	
const lakshya={
	name:"lakshya",
	qualification:"btech",


	sum:function  () {
			var add=2+2;
			console.log(add);
			console.log(this); 
	}

}	
lakshya.sum();
