const express = require('express');
const {createNumsArr, sortArr, calculateAverage, calculateMedian, calculateMode} = require('./helpers')
const ExpressError = require('./expressError')

const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required", 400);
        }
        const numsString = req.query.nums;
        const nums = createNumsArr(numsString);

        for(let i=0; i < nums.length; i++){
            if(isNaN(nums[i])){
                throw new ExpressError("Must include only numbers", 400);
            }
        }

        const srtdNums = sortArr(nums);
    
        const mean = calculateAverage(srtdNums);
    
        const resp = {
            operation: "mean",
            value: mean
        };
    
        return res.json(resp)
    } catch (e) {
        next(e)
    }
});

app.get('/median', (req, res, next) =>{
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required", 400);
        }

        const numsString = req.query.nums;
        const nums = createNumsArr(numsString);

        for(let i=0; i < nums.length; i++){
            if(isNaN(nums[i])){
                throw new ExpressError("Must include only numbers", 400);
            }
        }

        const srtdNums = sortArr(nums);
    
        const med = calculateMedian(srtdNums);
        
        const resp = {
            operation: "median",
            value: med
        }
    
        return res.json(resp)
    } catch (e){
        next(e)
    }

});

app.get('/mode', (req, res, next) =>{
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required", 400);
        }

        const numsString = req.query.nums;
        const nums = createNumsArr(numsString);
        
        for(let i=0; i < nums.length; i++){
            if(isNaN(nums[i])){
                throw new ExpressError("Must include only numbers", 400);
            }
        }
        
        const mode = calculateMode(nums);
    
        const resp = {
            operation: "mode",
            value: mode
        }
    
        return res.json(resp)
    } catch (e){
        next(e);
    }

});

app.get('/all', (req, res, next) => {
    try{
        if(!req.query.nums){
            throw new ExpressError("Numbers are required", 400);
        }

        const numsString = req.query.nums;
        const nums = createNumsArr(numsString);

        for(let i=0; i < nums.length; i++){
            if(isNaN(nums[i])){
                throw new ExpressError("Must include only numbers", 400);
            }
        }

        const srtdNums = sortArr(nums);
        const mean = calculateAverage(srtdNums);
        const med = calculateMedian(srtdNums);
        const mode = calculateMode(srtdNums);

        const resp = {
            operation: "all",
            mean: mean,
            median: med,
            mode: mode
        }

        return res.json(resp);
    }
    catch(e){
        next(e);
    }
})

app.use( (req, res, next) => {
    const e = new ExpressError("Page not found", 404);
    next(e);
});

app.use( (err, req, res, next) => {
    let status = err.status || 500;
    let msg = err.msg;

    return res.status(status).json({
        error: {msg, status}    
    });
});

app.listen(3000, () =>{
    console.log('App open on port 3000');
});