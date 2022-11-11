let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange 
  let input =  ["Irina", "Etza", "Daniel"];
  let output = ["rn", "tz", "dnl"];
  // Act
  let result = removeVowelsFromWords(input); 
  console.log(result);
  // Assert
  expect(output).toEqual(result);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
