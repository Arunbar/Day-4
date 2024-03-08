let findMedianSortedArrays = (function() {
    return function(nums1, nums2) {
        let mergedArray = [];
        let i = 0, j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                mergedArray.push(nums1[i]);
                i++;
            } else {
                mergedArray.push(nums2[j]);
                j++;
            }
        }
        while (i < nums1.length) {
            mergedArray.push(nums1[i]);
            i++;
        }
        while (j < nums2.length) {
            mergedArray.push(nums2[j]);
            j++;
        }
        let mid = mergedArray.length / 2;
        return mergedArray.length % 2 === 0 ? (mergedArray[mid - 1] + mergedArray[mid]) / 2 : mergedArray[Math.floor(mid)];
    };
})();

let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];
let median = findMedianSortedArrays(nums1, nums2);
console.log("Median: " + median); // Output: 3.5
