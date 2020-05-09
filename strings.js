/* 
Create a function that returns the string "Burp" 
with the amount of "r's" determined by the input parameters of the function.

Examples:
longBurp(3) ➞ "Burrrp"
longBurp(5) ➞ "Burrrrrp"
*/

function longBurp(num) {
	var repeatedR = 'r'
	for (var i = 0; i < num - 1; i++) {
		repeatedR += repeatedR[i]
	}
	return 'Bu' + repeatedR + 'p'
}

//testing our function by calling it 

console.log(longBurp(3)) // --> "Burrrp"
console.log(longBurp(5)) // --> "Burrrrrp"
console.log(longBurp(9)) // --> "Burrrrrrrrrp"
console.log(longBurp(10)) // --> "Burrrrrrrrrrp"
console.log(longBurp(13)) // --> "Burrrrrrrrrrrrrp"
console.log(longBurp(18)) // --> "Burrrrrrrrrrrrrrrrrrp"
console.log(longBurp(1)) // --> "Burp"
