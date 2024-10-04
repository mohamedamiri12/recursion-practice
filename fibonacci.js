// by iteration
function fibs(number) {
    let result = [];
    for(let i = 0; i < number ;i++){
        if(i<=1) result.push(i)
        else result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result
}

// by recursion

function fibsRec(number,result=[]) {
    if(number > 1) result = fibsRec(number-1,result)
    if(number<=2) 
           result.push(number-1)
    else {
           result = result.concat((result[result.length - 1] + result[result.length - 2]))
    }
   return result
}
console.log(fibsRec(8))



