function add(numbers){
  let digits = '0123456789';
  let numbersArray = []
  for (let char of numbers) {
    if (digits.includes(char)){
        numbersArray.push(Number(char))
    }
  }
  return numbersArray.reduce((num1, num2) => num1 + num2).toString()
}

module.exports = add