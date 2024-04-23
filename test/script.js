document.getElementById('getData').addEventListener('click', () => {
    fetch('http://http://localhost:5144/switch.js', {
        method: 'POST', // or 'GET'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Your request payload here
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});