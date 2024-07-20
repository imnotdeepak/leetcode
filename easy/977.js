var sortedSquares = function(nums) {
	let array = [];
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		if (nums[left] ** 2 > nums[right] ** 2) {
			array.unshift(nums[left] ** 2);
			left++;
		} else {
			array.unshift(nums[right] ** 2);
			right--;
		}
		return array;
	}

}
