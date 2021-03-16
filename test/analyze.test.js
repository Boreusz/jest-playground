const analyze = require('../js/analyze')
test("Array Analyze Test 1", () =>{
    expect(analyze([2,3,3,4])).toEqual({avg: 3, min: 2, max:4, length:4})
})
test("Array Analyze Test 2", () =>{
    expect(analyze([6,8,4,10,1,2,4])).toEqual({avg: 5, min: 1, max:10, length:7})
})