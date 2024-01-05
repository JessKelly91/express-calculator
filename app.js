const express = require('express');
const {createNumsArr, sortArr, calculateAverage, calculateMedian, calculateMode} = require('./helpers')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res) => {
    const numsString = req.query.nums;
    const nums = createNumsArr(numsString);
    const srtdNums = sortArr(nums);

    const avg = calculateAverage(srtdNums);

    resp = {
        operation: "mean",
        value: avg
    };

    return res.json(resp)
})

app.get('/median', (req, res) =>{
    const numsString = req.query.nums;
    const nums = createNumsArr(numsString);
    

    // let srtdNums = nums.sort((a, b) => a-b);
    // let midIdx;

    // const med = calculateMedian(nums);

    // resp = {
    //     operation: "median",
    //     value: med
    // }

    // return res.json(resp)
})

// app.get('/mode', (req, res) =>{
//     const numsString = req.query.nums;
//     const nums = createNumsArr(numsString);
    
//     // const mode = calculateMode(nums);

//     resp = {
//         operation: "mode",
//         value: mode
//     }

//     return res.json(resp)
// })


app.listen(3000, () =>{
    console.log('App open on port 3000');
})