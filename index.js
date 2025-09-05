// writeCards: returns an array of thank-you messages
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// countDown: logs numbers from n down to 0
function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

// Export functions for tests
module.exports = {
  writeCards,
  countDown
};

