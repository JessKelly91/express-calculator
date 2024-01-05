const {createNumsArr, sortArr, calculateAverage, calculateMedian, calculateMode} = require('../helpers')

describe('testing createNumsArr', () => {
    test('strings of nums create nums arr', () => {
        str = '1,3,5,7';
        const nums = createNumsArr(str);
        expect(nums).toEqual([1,3,5,7])
    });

    test('NaN included in arr when word entered', () => {
        str = 'foo,3,5';
        const nums = createNumsArr(str);
        expect(nums).toContainEqual(NaN);        
    });
});

describe('testing sortArr', () =>{
    test('sorts array into numerical order', () =>{
        const arr = [5,3,8,2];
        const srtdArr = sortArr(arr);
        expect(srtdArr).toEqual([2,3,5,8]);
    });
});

describe('testing caclulateAverage', () => {
    test('calculates average with all positive nums', () => {
        const srtdArr = [1,3,5,7,10,15];
        const avg = calculateAverage(srtdArr);
        expect(avg).toEqual(6.83);
    });
    test('calculates with negative nums', () => {
        const srtdArr = [-5,1,3,5,7,10,15];
        const avg = calculateAverage(srtdArr);
        expect(avg).toEqual(5.14);
    });
});

describe('testing caclulateMedian', () => {
    test('odd # of indexes', () => {
        const srtdArr = [1,3,5,7,10,15,20];
        const med = calculateMedian(srtdArr);
        expect(med).toEqual(7)
    });
    test('even # of indexes', () => {
        const srtdArr = [1,3,5,7,10,15];
        const med = calculateMedian(srtdArr);
        expect(med).toEqual(6);
    });
});

describe('testing caclulateMode', () => {
    test('has one clear mode', () => {
        const arr = [1,1,1,2,3,4];
        const mode = calculateMode(arr);
        expect(mode).toEqual(1);
    });
    test('has more than one mode', () => {
        const arr = [1,1,2,2,3,4];
        const mode = calculateMode(arr);
        expect(mode).toEqual([1,2]);
    });
});
