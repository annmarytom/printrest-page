const headings = [
  "home decor idea",
  "weeknight dinner idea",
  "new look outfit",
  "green thumb idea"
];

const imageSets = [
  [

    "Images/home decore/1.jpg",
    "Images/home decore/2.jpg",
    "Images/home decore/3.jpg",
    "Images/home decore/4.jpg",
    "Images/home decore/5.jpg",
    "Images/home decore/6.jpg",
    "Images/home decore/7.jpg",
    "Images/home decore/8.jpg",
    "Images/home decore/9.jpg",
    "Images/home decore/10.jpg"
  ],
  [
    "Images/weekend dinner/1.jpg",
    "Images/weekend dinner/2.jpg",
    "Images/weekend dinner/3.jpg",
    "Images/weekend dinner/4.jpg",
    "Images/weekend dinner/5.jpg",
    "Images/weekend dinner/6.jpg",
    "Images/weekend dinner/7.jpg",
    "Images/weekend dinner/8.jpg",
    "Images/weekend dinner/9.jpg",
    "Images/weekend dinner/10.jpg"

  ],
  [
    "Images/outfits/1.jpg",
    "Images/outfits/2.jpg",
    "Images/outfits/3.jpg",
    "Images/outfits/4.jpg",
    "Images/outfits/5.jpg",
    "Images/outfits/6.jpg",
    "Images/outfits/7.jpg",
    "Images/outfits/8.jpg",
    "Images/outfits/9.jpg",
    "Images/outfits/10.jpg"
  ],
  [
    "Images/green/1.jpg",
    "Images/green/2.jpg",
    "Images/green/3.jpg",
    "Images/green/4.jpg",
    "Images/green/5.jpg",
    "Images/green/6.jpg",
    "Images/green/7.jpg",
    "Images/green/8.jpg",
    "Images/green/9.jpg",
    "Images/green/10.jpg",
  ]
];

let currentIndex = 0;
let intervalId;

const headingElement = document.getElementById("sub-heading");
const imageGallery = document.getElementById("image-gallery");
const dotsContainer = document.getElementById("dots-container");

function createDots(count) {
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateContent(true);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function updateContent(manual = false) {
  headingElement.classList.add('fade');
  imageGallery.classList.remove('fade-in');
  imageGallery.classList.add('fade-out');

  setTimeout(() => {
    headingElement.textContent = headings[currentIndex % headings.length];
    headingElement.classList.remove('fade');

    imageGallery.innerHTML = "";
    imageSets[currentIndex].forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      imageGallery.appendChild(img);
    });

    imageGallery.classList.remove('fade-out');
    imageGallery.classList.add('fade-in');
  }, 300);

  updateDots(currentIndex);

  if (!manual) {
    currentIndex = (currentIndex + 1) % imageSets.length;
  } else {
    // Pause autoplay on manual click
    stopAutoPlay();
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(startAutoPlay, 6000);
  }
}

function startAutoPlay() {
  intervalId = setInterval(() => updateContent(), 4000);
}

function stopAutoPlay() {
  clearInterval(intervalId);
}

// Initial setup
createDots(imageSets.length);
updateContent();
startAutoPlay();
