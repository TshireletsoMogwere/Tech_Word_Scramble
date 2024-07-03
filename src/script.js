window.onload = function() {
    const words = ["typescript", "database", "ethernet", "manufacturing", "framework", "server", "cascading", "typography", "firewalls", "algorithm", "arithmetic", "repository", "python", "routers", "whiteboard", "wireframe", "agile", "boolean", "cache", "computing"];
    let currentWord = "";
    let scrambledWord = "";
    let score = 0;
    let guessedWords = new Set(); // Set to store guessed words

    function scrambleWord(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }

    function nextWord() {
        document.getElementById('result').textContent = '';
        document.getElementById('hint').textContent = '';
        document.getElementById('guess').value = ''; // Clear input field
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex];
        scrambledWord = scrambleWord(currentWord);
        document.getElementById('scrambled-word').textContent = scrambledWord;
    }

    function checkGuess() {
        const guess = document.getElementById('guess').value.trim().toLowerCase();
        
        // Check if the guess has already been guessed
        if (guessedWords.has(guess)) {
            alert('Already guessed the word!');
            return;
        }
        
        guessedWords.add(guess); // Add the guess to the set of guessed words

        const resultElement = document.getElementById('result');
        resultElement.textContent = ''; // Clear previous results

        if (guess === currentWord) {
            score += 1;
            resultElement.textContent = 'Correct! ✔️'; // Add celebratory emoji
        } else {
            resultElement.textContent = 'Incorrect! ❌'; // Add red cross emoji
        }

        document.getElementById('score').textContent = `Score: ${score}`;
    }

    function showHint() {
        const hintElement = document.getElementById('hint');
        hintElement.textContent = `Hint: The first letter is "${currentWord.charAt(0).toUpperCase()}"`;
    }

    // Make functions accessible globally
    window.nextWord = nextWord;
    window.checkGuess = checkGuess;
    window.showHint = showHint;

    nextWord(); // Initialize the first word
}
