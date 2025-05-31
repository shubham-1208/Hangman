document.addEventListener('DOMContentLoaded', () => {
  // Game variables
  const words = [
    { word: 'JAVASCRIPT', hint: 'A popular programming language for the web' },
    { word: 'HANGMAN', hint: 'The name of this game' },
    { word: 'DEVELOPER', hint: 'Someone who writes code' },
    { word: 'WEBSITE', hint: 'A collection of web pages' },
    { word: 'HTML', hint: 'Markup language for creating web pages' },
    { word: 'CSS', hint: 'Styling language for web pages' },
    { word: 'PROGRAMMING', hint: 'The process of creating software' },
    { word: 'COMPUTER', hint: 'Electronic device for processing data' },
    { word: 'KEYBOARD', hint: 'Device used for typing' },
    { word: 'INTERNET', hint: 'Global network of computers' }
  ];
  
  let currentWord = '';
  let currentHint = '';
  let guessedLetters = [];
  let wrongGuesses = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  let gameActive = false;
  
  // DOM elements
  const wordDisplay = document.getElementById('word-display');
  const keyboard = document.getElementById('keyboard');
  const gameMessage = document.getElementById('game-message');
  const scoreElement = document.getElementById('score');
  const timeElement = document.getElementById('time');
  const hintText = document.getElementById('hint-text');
  const newGameBtn = document.getElementById('new-game-btn');
  const resetBtn = document.getElementById('reset-btn');
  const hangmanParts = document.querySelectorAll('.hangman-part');
  
  // Initialize keyboard
  function createKeyboard() {
    keyboard.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      const key = document.createElement('button');
      key.textContent = letter;
      key.classList.add('key');
      key.addEventListener('click', () => handleGuess(letter));
      keyboard.appendChild(key);
    }
  }
  
  // Start a new game
  function startNewGame() {
    // Reset game state
    guessedLetters = [];
    wrongGuesses = 0;
    gameActive = true;
    
    // Hide all hangman parts except base, pole, beam, and rope
    hangmanParts.forEach((part, index) => {
      if (index > 3) {
        part.style.display = 'none';
      }
    });
    
    // Reset keyboard
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.classList.remove('used', 'correct', 'wrong');
      key.disabled = false;
    });
    
    // Select a random word
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    currentHint = words[randomIndex].hint;
    
    // Update hint text
    hintText.textContent = currentHint;
    
    // Update word display
    updateWordDisplay();
    
    // Clear game message
    gameMessage.textContent = '';
    
    // Start timer
    clearInterval(timerInterval);
    timeLeft = 60;
    timeElement.textContent = timeLeft;
    startTimer();
  }
  
  // Reset the game completely
  function resetGame() {
    // Stop the timer
    clearInterval(timerInterval);
    
    // Reset score
    score = 0;
    scoreElement.textContent = score;
    
    // Reset time
    timeLeft = 60;
    timeElement.textContent = timeLeft;
    
    // Start a new game
    startNewGame();
  }
  
  // Update the word display with correctly guessed letters
  function updateWordDisplay() {
    let display = '';
    for (const letter of currentWord) {
      if (guessedLetters.includes(letter)) {
        display += letter;
      } else {
        display += '_';
      }
      display += ' ';
    }
    wordDisplay.textContent = display.trim();
  }
  
  // Handle letter guess
  function handleGuess(letter) {
    if (!gameActive || guessedLetters.includes(letter)) return;
    
    guessedLetters.push(letter);
    
    // Find the key element and mark it as used
    const keyElement = Array.from(document.querySelectorAll('.key')).find(key => key.textContent === letter);
    
    if (currentWord.includes(letter)) {
      // Correct guess
      keyElement.classList.add('used', 'correct');
      updateWordDisplay();
      
      // Check if player won
      if (!wordDisplay.textContent.includes('_')) {
        endGame(true);
      }
    } else {
      // Wrong guess
      keyElement.classList.add('used', 'wrong');
      wrongGuesses++;
      
      // Show next hangman part
      if (wrongGuesses + 4 < hangmanParts.length) {
        hangmanParts[wrongGuesses + 3].style.display = 'block';
      }
      
      // Check if player lost
      if (wrongGuesses >= 6) {
        endGame(false);
      }
    }
  }
  
  // Start the timer
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timeElement.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        endGame(false);
      }
    }, 1000);
  }
  
  // End the game
  function endGame(isWin) {
    gameActive = false;
    clearInterval(timerInterval);
    
    if (isWin) {
      gameMessage.textContent = 'Congratulations! You won!';
      gameMessage.style.color = '#2ecc71';
      score += 10 + timeLeft;
      scoreElement.textContent = score;
    } else {
      gameMessage.textContent = `Game over! The word was: ${currentWord}`;
      gameMessage.style.color = '#e74c3c';
      
      // Show all remaining hangman parts
      hangmanParts.forEach(part => {
        part.style.display = 'block';
      });
    }
    
    // Disable all keys
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      if (!key.classList.contains('used')) {
        key.classList.add('used');
      }
    });
  }
  
  // Event listeners
  newGameBtn.addEventListener('click', startNewGame);
  resetBtn.addEventListener('click', resetGame);
  
  // Handle keyboard input
  document.addEventListener('keydown', (e) => {
    if (!gameActive) return;
    
    const key = e.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
      handleGuess(key);
    }
  });
  
  // Initialize the game
  createKeyboard();
  startNewGame();
});
