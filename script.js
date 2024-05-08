
//CLICK FOR NUMBERS

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

  document.addEventListener('click', function() {
    setTimeout(function() {
        var audio = new Audio('assets/quote.mp3');
        audio.play();
    }, 200);
});

// CURSOR

 // Update the position of the custom cursor based on mouse movement
 document.addEventListener('mousemove', function(event) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

    var cursorText = document.querySelector('.cursor-text');
    cursorText.style.left = (event.clientX + 45) + 'px'; // Adjust the horizontal position of the text
    cursorText.style.top = (event.clientY +17) + 'px';
});
