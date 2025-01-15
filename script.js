document.getElementById('email').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const resultText = document.getElementById('emailto');
    
    // Toggle the visibility of the text
    if (resultText.classList.contains('show')) {
        resultText.classList.remove('show'); // Hide the text
    } else {
        resultText.classList.add('show'); // Show the text
    }
});