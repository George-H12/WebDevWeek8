const textElement = document.getElementById('text');
const titles = ['Web 2.0', 'What Is Web 2.0 and How Has It Evolved?','Advantages of Web 2.0: How Does It Benefit Users?',
"Disadvantages of Web 2.0: What Are the Challenges?", "Security Vulnerabilities in the Web 2.0 Environment", "Data Privacy Concerns in the Web 2.0 Age"];
let currentIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const title = titles[currentIndex];
  if (isDeleting) {
    currentText = title.substring(0, currentText.length - 1);
  } else {
    currentText = title.substring(0, currentText.length + 1);
  }

  textElement.innerHTML = currentText;

  const typeSpeed = isDeleting ? 50 : 50;

  if (!isDeleting && currentText === title) {
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % titles.length;
  }

  setTimeout(type, typeSpeed);
}

setTimeout(type, 1000);

function toggleContent(contentId) {
    let content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Add event listeners to the buttons
document.getElementById("advantages-button").addEventListener("click", function() {
    toggleContent("advantages-text");
});

document.getElementById("disadvantages-button").addEventListener("click", function() {
    toggleContent("disadvantages-text");
});
