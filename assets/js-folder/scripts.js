// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load default content (dashboard.html) into the container
    loadContent('dashboard.html');

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Attach click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior

            const page = this.getAttribute('href');  // Get the target page
            loadContent(page);  // Load the corresponding content
        });
    });

    // Function to load content into the content container
    function loadContent(page) {
        const container = document.getElementById('content-container');

        // Fetch the HTML content
        fetch(`html/${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;  // Insert the fetched content
            })
            .catch(error => {
                container.innerHTML = `<p>Error: ${error.message}</p>`;  // Handle errors
            });
    }
});
