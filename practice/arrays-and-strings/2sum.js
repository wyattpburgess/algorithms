/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target) => {
    if (nums.length === 2) {
        if (nums[0] + nums[1] === target) {
            return [0, 1];
        } else {
            return [];
        }
    }
    
    const lookupTable = {};
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        console.log(`CURR NUM: ${currNum}`);
        const complement = target - currNum;
        console.log(`LOOKING FOR ${complement}`);
        if (lookupTable[complement] !== undefined) {
            return [i, lookupTable[complement]]
        } else {
            lookupTable[complement] = i;
        }
    }
    
    return [];
};

twoSum([3,3], 6)