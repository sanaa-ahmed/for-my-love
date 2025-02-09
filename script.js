// Get elements
const showInviteBtn = document.getElementById('showInviteBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show pop-up when the button is clicked
showInviteBtn.addEventListener('click', function() {
  popup.style.display = 'flex'; // Make the pop-up visible
});

// Close the pop-up when the close button is clicked
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none'; // Hide the pop-up
});
