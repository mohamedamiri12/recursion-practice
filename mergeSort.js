function mergeSort(array){
    let sortedArray = []
    if(array.length == 1) {
        return array
    } 
    // split array into two
    const midPoint = Math.floor(array.length/2)

    // array two parts
    let leftPart = array.slice(0,midPoint)
    let rightPart = array.slice(midPoint)
    // sort the parts
    let sortedleft = mergeSort(leftPart)
    let sortedRight = mergeSort(rightPart)

    
    // the merge logic
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < leftPart.length && rightIndex < rightPart.length){
            if(sortedleft[leftIndex] < sortedRight[rightIndex]){
                sortedArray.push(sortedleft[leftIndex])
                leftIndex++;
            } else {
                sortedArray.push(sortedRight[rightIndex])
                rightIndex++;
            }
                
    }
    // Add any remaining elements
    while (leftIndex < sortedleft.length) {
        sortedArray.push(sortedleft[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < sortedRight.length) {
        sortedArray.push(sortedRight[rightIndex]);
        rightIndex++;
    }
    return sortedArray
}
console.log(mergeSort([105, 79, 100, 110]))

