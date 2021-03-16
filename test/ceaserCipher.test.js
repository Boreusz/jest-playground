const ceaserCipher = require('../js/ceaserCipher')

test("Ceaser Cipher test 1", () =>{
    expect(ceaserCipher("abc de", 2)).toBe("cde fg")
})
test("Ceaser Cipher test 2", () =>{
    expect(ceaserCipher("abc. de", 2)).toBe("cde. fg")
})
test("Ceaser Cipher test: z -> a Case 1", () =>{
    expect(ceaserCipher("xyz", 3)).toBe("abc")
})
test("Ceaser Cipher test: z -> a Case 2", () =>{
    expect(ceaserCipher("xyz, abc", 1)).toBe("yza, bcd")
})