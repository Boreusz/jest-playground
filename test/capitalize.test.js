const capitalize = require('../js/capitalize')
test('Capitalize first letter of the Word/String', () => {
    expect(capitalize("dog")).toBe("Dog")
})