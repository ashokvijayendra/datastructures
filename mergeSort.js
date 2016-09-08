const merge = function(leftArray,rightArray){ //testing
	const newArray = [];
	while(leftArray.length && rightArray.length){
		if(leftArray[0] < rightArray[0]){
			newArray.push(leftArray.shift())
		}else {
			newArray.push(rightArray.shift())
		}
	}
	return newArray.concat(leftArray).concat(rightArray);
}

const mergeSort = function(inputArray){
	if(inputArray.length == 1){
		return inputArray
	}else {
		const left = Math.floor(inputArray.length/2);
		const leftArray = inputArray.splice(0,left);
		return merge(mergeSort(leftArray),mergeSort(inputArray))
	}
}

console.log(mergeSort([3, 5 ,9,4,9999,8]));
