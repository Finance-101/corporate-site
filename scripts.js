// Function to remove the loading screen and show the main content
function removeLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const body = document.body;

    // Add the 'hide' class to trigger the fade-out effect
    loadingScreen.classList.add('hide');

    // Remove the 'loading' class from the body to show the scrollbar
    body.classList.remove('loading');

    // Set a timeout to remove the loading screen after the fade-out animation completes
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000); // Adjust the timeout based on your transition duration
}

// Set a timeout to remove the loading screen after 4 seconds
setTimeout(removeLoadingScreen, 2500);
