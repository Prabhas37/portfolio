function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Array of words for the typing effect
  const words = ["Aspiring FullStack Java Deve❤️per", "Memer", "Editor","Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing-text");

  function type() {
    if (charIndex < words[wordIndex].length) {
      typingElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust the typing speed (milliseconds)
    } else {
      setTimeout(erase, 1000); // Wait before starting to erase
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Adjust the erasing speed (milliseconds)
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // Wait before starting to type the next word
    }
  }

  // Start the typing effect
  type();
});
