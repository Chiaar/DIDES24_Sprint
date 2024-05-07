/*document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const frauImage = document.querySelector('.frau');
    const ellipse1 = document.querySelector('.ellipse1');
    const lacie = document.querySelector('.lacie');
    const smallnumber1 = document.querySelector('.smallnumber1');

    const mannImage = document.querySelector('.mann');
    const ellipse2 = document.querySelector('.ellipse2');
    const joe = document.querySelector('.joe');
    const smallnumber2 = document.querySelector('.smallnumber2');

    // Add click event listener to the "frau" image
    frauImage.addEventListener('click', function() {
        // Toggle the visibility of ellipse1, lacie, and smallnumber1
        toggleVisibility(ellipse1);
        toggleVisibility(lacie);
        toggleVisibility(smallnumber1);
    });

    // Add click event listener to the "mann" image
    mannImage.addEventListener('click', function() {
        // Toggle the visibility of ellipse2, joe, and smallnumber2
        toggleVisibility(ellipse2);
        toggleVisibility(joe);
        toggleVisibility(smallnumber2);
    });

    // Function to toggle visibility of an element
    function toggleVisibility(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
});*/


// AUDIO

// Wait for 4 seconds before playing the audio
setTimeout(function() {
    // Create an audio element
    var audio = new Audio('assets/quote.mp3');
    // Play the audio
    audio.play();
  }, 4000); // 4000 milliseconds = 4 seconds
