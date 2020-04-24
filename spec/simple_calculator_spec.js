const { add, multiply, } = require("../src/simple_calculator.js")

describe("add", function () {

    it("should add two numbers", function () {
        expect(add(1, 2)).toEqual(3);
    })

    it("should add numbers", function () {
        expect(add(1, 2, 3, 4, 5)).toEqual(15);
    })
})


describe("multiply", function () {
    
    it("should multiply two numbers", function () {
        expect(multiply(1, 3)).toEqual(3);
    })

    it("should multiply numbers", function () {
        expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
    })
})
