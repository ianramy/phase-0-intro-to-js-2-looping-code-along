// Code your solutions in this file
function writeCards(names, giftType) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a number and log each step
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = { writeCards, countDown };
  