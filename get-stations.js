// Script to extract all unique stations from API and generate coordinates
// Run this in browser console on http://localhost:5175/

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then(res => res.json())
  .then(data => {
    const stations = [...new Set(data.map(s => s.stacja))].sort();
    console.log('=== WSZYSTKIE STACJE Z API ===');
    console.log('Liczba stacji:', stations.length);
    console.log('Stacje:');
    stations.forEach(s => console.log(`  - ${s}`));
    
    // Copy this to generate coordinates template
    console.log('\n=== TEMPLATE DO stationCoordinates.js ===');
    stations.forEach(s => {
      console.log(`'${s}': { lat: 0, lon: 0 },`);
    });
  })
  .catch(err => console.error('Error:', err));
