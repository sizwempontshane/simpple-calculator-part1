const { add, multiply } = require("../src/simple_calculator");

describe("add", function () {
  it("should add two numbers", function () {
    expect(add(3, 2)).toEqual(5);
  });

  it("should add numbers", function () {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

describe("multiply", function () {
  it("should multiply two numbers", function () {
    expect(multiply(2, 5)).toEqual(10);
  });

  it("should multiply numbers", function () {
    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
