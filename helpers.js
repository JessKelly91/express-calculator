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


function calculateMedian(srtdArr){

    if(srtdArr.length % 2 != 0){
        // return middle index
        let midIdx = Math.floor(srtdArr.length / 2);
        return srtdArr[midIdx];
    } 
    else {
        // add two middle indexes and divide
        let midIdx1 = Math.floor((srtdArr.length / 2) - 1);
        let midIdx2 = Math.floor(srtdArr.length / 2);
        let midIdxVals = [srtdArr[midIdx1], srtdArr[midIdx2]]
        
        const avg = calculateAverage(midIdxVals);

        return avg;
    }
}


function calculateMode(arr){
    let counter = {};

    arr.forEach( (num) => {
        if(!counter[num]){
            counter[num] = 1;
        }
        else{
            counter[num]++;
        }
    });

    let highestVal = 0;
    let highestValNum;

    for(let num in counter){
        const currVal = counter[num];
        if (currVal > highestVal){
            highestVal = currVal;
            highestValNum = num;
        }
    }

    return highestValNum;
    

}


module.exports = { createNumsArr, sortArr, calculateAverage, calculateMedian, calculateMode }