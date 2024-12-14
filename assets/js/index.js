const texts = [
  "A Web Developer.",
  "A Programmer.",
  "A Front-end Developer."
];
const typingSpeed = 100; // Speed of typing in milliseconds
const deletingSpeed = 50; // Speed of deleting in milliseconds
const delayBetweenTexts = 1000; // Delay before deleting the text
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeText() {
    const typingTextElement = document.getElementById("typing-text");
    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentCharIndex < currentText.length) {
        // Typing characters
        typingTextElement.innerHTML += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && currentCharIndex > 1) {
        // Deleting characters but keeping the first letter
        typingTextElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(typeText, deletingSpeed);
    } else {
        // Move to the next word
        if (!isDeleting) {
            setTimeout(() => {
                isDeleting = true;
                typeText();
            }, delayBetweenTexts);
        } else {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop to the next text
            setTimeout(typeText, typingSpeed);
        }
    }
}

// Start the typing effect
typeText();

