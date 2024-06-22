function fibonacci(num) {
// your code here
	// Base Case
	if(num === 0 || num === 1){
		return num;

	}
	// Recursive case 
	 return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
