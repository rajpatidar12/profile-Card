const backgrounds = [
  "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif", // Digital network
  "https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif", // Circuit board animation
  "https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif", // Matrix style
  "https://media.giphy.com/media/ko7twHhomhk8E/giphy.gif", // Tech waves
  "https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif", // Data stream
];

// Set initial background
document.body.style.backgroundImage = `url(${backgrounds[0]})`;

let currentIndex = 0;

document.getElementById("changeBackground").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

  // Add fade effect
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Add smooth transition for background changes
document.body.style.transition = "opacity 0.3s ease";
