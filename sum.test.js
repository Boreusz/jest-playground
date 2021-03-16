const sum = require('./sum')
test('adds 1 + 2 t oequal 3', () => {
    expect(sum(1,2)).toBe(3)
})