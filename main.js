// Create balloons initially when the page loads
createBalloons(30); // Change the number as desired

function celebrate() {

// Play sound
document.getElementById('birthdayMusic').play();

  // Hide "Celebrate" button
  document.getElementById('celebrateButton').style.display = 'none';

  // Show gallery and next button, update message
  document.getElementById('photoGallery').style.display = 'flex';
  document.getElementById('nextButton').style.display = 'block';
  document.getElementById('birthdayMessage').innerHTML = "Selamat ulang tahun lagi, Yosi! 🥳🎉 ini aku buat khusus untuk kamu maaf gak bisa memberikan yang lebih baik dan gak begitu banyak Aku harap kamu senang dan bahagia. Cuman mau bilang aku kangen sama kamu pengen balikan perasaan ini sudah terlalu sayang sama kamu🎈💖";
}

function createBalloons(num) {
  for (let i = 0; i < num; i++) {
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;
    document.body.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ['#FF4081', '#FFEB3B', '#4CAF50', '#FF9800', '#03A9F4'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function goToNextPage() {
  // Redirect to another HTML file
  window.location.href = "Hayuk.html"; // Ganti "yourpage.html" dengan nama halaman HTML yang sudah kamu buat
}
