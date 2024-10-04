// Get the modal element
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');

// Open modal on button click
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when 'x' is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    
});

// Close modal if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    // alert(name)
    if (name) {
        sendDataToGoogleSheet(name);
        modal.style.display = 'none'; // Hide modal after submission
        alert("Thank you for being a part of our Wedding!")
    } else {
        alert("Please enter a name");
    }
});

// Function to send data to Google Sheets
function sendDataToGoogleSheet(name) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbydHJc3RZarn6O5DXspJDp52QJ62UAMI6eed42Uo7YrfeqYesqkxQjC8DAcYlC4zs4L/exec'; // Replace with your Google Script URL
    const formData = new FormData();
    formData.append('name', name);

    fetch(scriptURL, { method: 'POST', body: formData })
        // .then(response => alert('Thank you for Registering'))
        // .catch(error => console.error('Error!', error.message));
}
