function createNumsArr(str){
    const numsArr = str.split(',');
    const nums = numsArr.map(Number);

    return nums;
}

function sortArr(arr){
    const srtdArr = arr.sort((a,b) => a-b)
    return srtdArr;
}

function calculateAverage(srtdArr){
    const sum = srtdArr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / srtdArr.length;
    return avg
}


function calculateMedian(arr){
    if(arr.length % 2 != 0){
        // return middle index
        midIdx = srtdNums[srtdNums.length / 2]
        console.log(midIdx)
        return midIdx;
    } else{
        // add two middle indexes and divide
    }
}


function calculateMode(arr){

}


module.exports = { createNumsArr, sortArr, calculateAverage, calculateMedian, calculateMode }