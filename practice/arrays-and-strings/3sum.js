/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = (nums) => {
    if (nums.length < 3) {
        return [];
    }
    
    // sort array
    nums.sort((a, b) => {
        return a - b;
    });

    const solutions = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            console.log("SKIP!");
            continue;
        }
        const currNumber = nums[i];
        const currCompSum = 0 - currNumber;
        
        let left = i + 1,
            right = nums.length - 1;
        
        while (left < right) {
            const currSum = nums[left] + nums[right];
            
            if (currSum === currCompSum) {
                solutions.push([nums[i], nums[left], nums[right]]);
                left++
            } else if (currSum > currCompSum) {
                right--;
            } else {
                left++;
            }
        }
    }
    
    return solutions;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
