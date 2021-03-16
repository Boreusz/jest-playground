const calculator = require("../js/calculator")

test("Addition Test", () =>{
    expect(calculator.add(1,2)).toBe(3)
})
test("Subtraction Test", () => {
    expect(calculator.subtract(2,8)).toBe(-6)
})
test("Multiplication Test", () => {
    expect(calculator.multiply(2,2)).toBe(4)
})
test("Multiplication by 0 Test", () => {
    expect(calculator.multiply(2,0)).toBe(0)
})
test("Division Test", () => {
    expect(calculator.divide(10,5)).toBe(2)
})
test("Division by 0 Test", () => {
    expect(calculator.divide(10,0)).toBe(Infinity)
})