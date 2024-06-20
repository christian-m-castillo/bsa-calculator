document.getElementById('bsa-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight)) {
    alert('Please enter valid numbers for height and weight.');
    return;
  }

  const bsa = Math.sqrt((height * weight) / 3600).toFixed(2);

  document.getElementById('result').textContent = `The Body Surface Area (BSA) is: ${bsa} m².`;
});