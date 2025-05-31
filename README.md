# Hangman Game

A classic web-based implementation of the Hangman word guessing game built with HTML, CSS, and JavaScript.

## Description

This Hangman game is an interactive web application where players try to guess a hidden word letter by letter. For each incorrect guess, a part of the hangman is drawn. The player wins by guessing the complete word before the hangman is fully drawn or the timer runs out.

## Features

- Random word selection from a predefined word list
- Visual SVG representation of the hangman that builds with each wrong guess
- Interactive on-screen keyboard
- Physical keyboard support
- Hint system to help players
- 60-second countdown timer
- Score tracking system
- Responsive design for various screen sizes

## How to Play

1. Open `hangman.html` in your web browser
2. A random word will be selected and displayed as underscores
3. Guess one letter at a time by clicking the on-screen keyboard or using your physical keyboard
4. If your guess is correct, the letter will be revealed in the word
5. If your guess is incorrect, a part of the hangman will be drawn
6. Use the hint provided to help you guess the word
7. Try to guess the entire word before:
   - The hangman is completely drawn (6 wrong guesses)
   - The 60-second timer runs out
8. Your score increases based on correct guesses and remaining time

## Game Controls

- **New Game**: Start a new game with a different word
- **Reset Game**: Reset the game completely, including your score

## Word Categories

The game includes words related to:
- Programming and web development
- Computer hardware and technology
- Internet terminology

## Technical Details

### File Structure

- `hangman.html`: Main HTML structure of the game
- `hangman.css`: Styling and responsive design
- `hangman.js`: Game logic and functionality

### Technologies Used

- HTML5 for structure
- CSS3 for styling and animations
- JavaScript for game logic
- SVG for the hangman drawing

### Key JavaScript Features

- DOM manipulation
- Event listeners for keyboard and mouse input
- Timer functionality
- Random word selection
- Game state management

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/YOUR-USERNAME/hangman-game.git
   ```

2. Navigate to the project directory:
   ```
   cd hangman-game
   ```

3. Open `hangman.html` in your web browser to start playing.

## Future Improvements

- Add more word categories
- Implement difficulty levels
- Add sound effects and animations
- Create a high score leaderboard
- Add multiplayer functionality
- Expand the word database

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the classic Hangman word game
- SVG drawing techniques for the hangman visualization
- Modern web development practices for interactive games
