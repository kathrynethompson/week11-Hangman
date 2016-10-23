var wordsToGuess = ['Anima', 'Bahamut', 'Tidus', 'Ifrit', 'Ixion', 'Rikku', 'Wakka', 'Shiva', 'Valefor', 'Yojimbo', 'Lulu', 'Yuna', 'Sin']
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;
