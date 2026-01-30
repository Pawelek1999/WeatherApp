// Quick test file to check API structure
fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then(res => res.json())
  .then(data => {
    console.log('First station:', data[0]);
    console.log('Available keys:', Object.keys(data[0]));
  })
  .catch(err => console.error('Error:', err));
