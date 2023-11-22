// Get all td elements with class "Listing"
var listingElements = document.querySelectorAll('td[class="Listing"]');

// Initialize an empty string to store the text
var textContent = '';

// Iterate through the elements and accumulate their text content
listingElements.forEach(function(listingElement) {
  textContent += listingElement.textContent.trim() + ';;;\n'; // Add a newline for each row
});

// Log or display the accumulated text
console.log(textContent);

// Alternatively, you can display the text in an alert dialog
// alert(textContent);
