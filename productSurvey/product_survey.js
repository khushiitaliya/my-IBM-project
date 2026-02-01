// Get references to HTML elements
const submitButton = document.getElementById('submitBtn');

function submitFeedback() {
  // Get values from input fields
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Show thank you alert
  alert('Thank you for your valuable feedback!');

  // Display user info and feedback in the hidden section
  document.getElementById('userName').textContent = username;
  document.getElementById('userAge').textContent = age;
  document.getElementById('userEmail').textContent = email;
  document.getElementById('userJob').textContent = job;
  document.getElementById('userDesignation').textContent = designation;
  document.getElementById('userProductChoice').textContent = productType;
  document.getElementById('userFeedback').textContent = feedback;

  // Make the hidden section visible
  document.getElementById('userInfo').style.display = 'block';
}

// Assign submitFeedback function to the submit button's onclick event
submitButton.onclick = submitFeedback;

// Allow form submission on pressing Enter key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});