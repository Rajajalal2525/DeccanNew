// Fetch locations from API and populate the location dropdown


// --- DEBUG: Add a log to see if script is running ---
window.addEventListener('DOMContentLoaded', function() {
  console.log('locationApi.js loaded');
  const locationDropdown = document.getElementById('location-dropdown');
  if (!locationDropdown) {
    console.error('location-dropdown not found');
    return;
  }
  // Remove loading text if present
  locationDropdown.innerHTML = '<option value="">All Locations</option>';

  fetch('https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/master-details?masterName=ProjectLocation&xref=Bangalore', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch locations');
      return res.json();
    })
    .then(data => {
      console.log('Location API response:', data);
      if (!data.success || !data.data || !Array.isArray(data.data)) throw new Error('Invalid location data');
      // Use masterDetailName or description for city name
      const uniqueLocations = [...new Set(data.data.map(loc => loc.masterDetailName || loc.description).filter(Boolean))];
      let options = '<option value="">All Locations</option>';
      uniqueLocations.forEach(loc => {
        options += `<option value="${loc}">${loc}</option>`;
      });
      locationDropdown.innerHTML = options;
    })
    .catch(err => {
      locationDropdown.innerHTML = '<option value="">All Locations</option>';
      console.error('Error loading locations:', err);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const locationDropdown = document.getElementById('location-dropdown');
  if (!locationDropdown) {
    console.error('location-dropdown not found');
    return;
  }
  // Show loading
  locationDropdown.innerHTML = '<option>Loading...</option>';

  fetch('https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net/master-details?masterName=ProjectLocation&xref=Bangalore', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch locations');
      return res.json();
    })
    .then(data => {
      console.log('Location API response:', data);
      if (!data.success || !data.data || !Array.isArray(data.data)) throw new Error('Invalid location data');
      const uniqueLocations = [...new Set(data.data.map(loc => loc.value).filter(Boolean))];
      let options = '<option value="">All Locations</option>';
      uniqueLocations.forEach(loc => {
        options += `<option value="${loc}">${loc}</option>`;
      });
      locationDropdown.innerHTML = options;
    })
    .catch(err => {
      locationDropdown.innerHTML = '<option value="">All Locations</option>';
      console.error('Error loading locations:', err);
    });
});
