
// Placeholder fake website list
const fakeWebsites = ["phishingsite.com", "fakeshop.net", "scamwebsite.org"];
const suspiciousWebsites = ["suspiciouswebsite.com", "potentialphishing.org"];

// Function to validate URL
function isValidUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + 
    "((([a-zA-Z0-9\\-]+)\\.)+[a-zA-Z]{2,})" + 
    "(\\/[a-zA-Z0-9#\\-._~%!$&'()*+,;=]*)?$", 
    "i"
  );
  return !!pattern.test(url);
}

// Function to check website authenticity
function checkWebsite() {
  const input = document.getElementById("url-input").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) { resultDiv.innerHTML = `<div class="warning">Please enter a website URL.</div>`;
    return;
  }

  // Validate the URL format
  if (!isValidUrl(input)) {
    resultDiv.innerHTML = `<div class="warning">Invalid URL format. Please check and try again.</div>`;
    return;
  }

  // Extract the domain (remove http:// or https:// and anything after '/')
  const domain = input.replace(/^https?:\/\//, '').split('/')[0];

  // Check if the domain is in the fake websites list
  if (fakeWebsites.includes(domain)) {
    resultDiv.innerHTML = `<div class="fake">Warning: This website is considered fake and potentially dangerous.</div>`;
    return;
  }

  // Check if the domain is in the suspicious websites list
  if (suspiciousWebsites.includes(domain)) {
    resultDiv.innerHTML = `<div class="warning">This website might be suspicious. Proceed with caution.</div>`;
    return;
  }

  // If the website is not in the lists, it's considered safe
  resultDiv.innerHTML = `<div class="safe">This website is safe to browse!</div>`;
}
   

