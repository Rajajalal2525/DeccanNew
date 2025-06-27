// *******  Backend Api  *******

// Live---------
// let apiUrl = 'https://dncrpropertyapi.azurewebsites.net/'

// Dev----------
// let apiUrl = 'https://devdncrbe.azurewebsites.net/'

// new live
//let apiUrl= 'https://mtestatesapi-f0bthnfwbtbxcecu.southindia-01.azurewebsites.net/'
let apiUrl =
  "https://dncrnewapi-bmbfb6f6awd8b0bd.westindia-01.azurewebsites.net";
// *********************************************************

const hmacToken = 'e74e1523bfaf582757ca621fd6166361a1df604b3c6369383f313fba83baceac';

// JWT Token Validation Logic

function urlRedirection(token) {
  // Always redirect to dev URL as per requirement
  window.location.href = `https://devdncrfe.azurewebsites.net/Redirecting/?tok=${token}`;
}
