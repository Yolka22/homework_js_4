let images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];

  let currentIndex = 0;

  function showImage(index) {
    let imageElement = document.getElementById('galleryImage');
    imageElement.src = images[index];

    let prevButton = document.getElementById('prevButton');
    let nextButton = document.getElementById('nextButton');

    prevButton.disabled = (index === 0);
    nextButton.disabled = (index === images.length - 1);
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      showImage(currentIndex);
    }
  }

  function nextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage(currentIndex);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    showImage(currentIndex);
  });