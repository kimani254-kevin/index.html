  // script.js

  document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.getElementById('navbarToggler');
    var content = document.getElementById('navbarContent');

    toggler.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('videoThumbnail');

    playButton.addEventListener('click', function() {
        // Hide the thumbnail image
        thumbnail.style.display = 'none';
        
        // Show the video and start playing it
        video.style.display = 'block';
        video.play();
    });
});
    function showPopup() {
        alert("No content");
    }
     // Set the target numbers for each counter
const targets = [100, 50, 20, 10];

// Function to animate the counters
function animateCounters() {
  const counters = document.querySelectorAll('.number');
  counters.forEach((counter, index) => {
    let start = 0;
    const target = targets[index];
    const duration = 2000; // animation duration in milliseconds
    const interval = 10; // animation interval in milliseconds

    const animate = () => {
      start += (target - start) / (duration / interval);
      counter.textContent = Math.round(start);
      if (start < target) {
        setTimeout(animate, interval);
      }
    };
    animate();
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', animateCounters);
  

