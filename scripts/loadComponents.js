function loadComponent(elementId, filepath) {
    // Fetch the HTML content from the provided file path
    fetch(filepath)
        .then(response => {
            // Checks if response is okay (status code 200)
            if(!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText} `)
            }
            return response.text(); // Converts the response to text (HTML content)
        })
        .then(data => {
            // Insert the fetched HTML context into the specified element
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error)); // Logs any errors to the console
}

// Load the components when the window has finished loading
window.onLoad = function () {
    // Loads each component sequentially, with the element ID first and the filePath second
    loadComponent('side-nav', 'WEB504-28.8.24\components\side-nav\side-nav.html');
    loadComponent('header', 'WEB504-28.8.24\components\header\header.html');
    loadComponent('footer', 'WEB504-28.8.24\components\footer\footer.html');
}