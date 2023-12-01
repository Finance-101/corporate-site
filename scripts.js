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
        
        // Scroll to the top of the page with smooth animation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1000); // Adjust the timeout based on your transition duration
}

// Set a timeout to add the 'loading' class to the body
setTimeout(() => {
    const body = document.body;
    
    // Add the 'loading' class to hide the scrollbar
    body.classList.add('loading');
}, 0);

// Set a timeout to remove the loading screen after 2.5 seconds
setTimeout(removeLoadingScreen, 2500);

// Function to generate team member cards
function generateTeamMembers() {
    const teamGrid = document.querySelector('.team-grid');

    const teamMembers = [
        { name: 'Ana Catarina Alves', role: 'External Relations Responsible', email: 'acras@iscte-iul.pt', image: 'ana-alves.jpeg' },
        { name: 'Aadil Sidik', role: 'Full Stack Developer', email: 'aimsk@iscte-iul.pt', image: 'aadil-sidik.jpeg' },
        { name: 'Filipe Silva', role: 'Product Owner', email: 'fnasa@iscte-iul.pt', image: 'filipe-silva.jpeg' },
        { name: 'João Ferro', role: 'Project Manager', email: 'jmsfo@iscte-iul.pt', image: 'joao-ferro.jpg' },
        { name: 'Luis Carlés', role: 'Quality Assurance', email: 'larcs@iscte-iul.pt', image: 'luis-carles.jpeg' },
        { name: 'Mário Cao', role: 'Backend Developer', email: 'macco2@iscte-iul.pt', image: 'mario-cao.jpeg' }
    ];

    teamMembers.sort((a, b) => a.name.localeCompare(b.name));

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('team-member');

        const image = document.createElement('img');
        image.src = new URL(`./assets/${member.image}`, window.location.href).href;
        image.alt = `${member.name} - ${member.role}`;

        const info = document.createElement('div');
        info.classList.add('team-member-info');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const role = document.createElement('p');
        role.textContent = member.role;

        const email = document.createElement('p');
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${member.email}`;
        emailLink.textContent = member.email;
        email.appendChild(emailLink);

        info.appendChild(name);
        info.appendChild(role);
        info.appendChild(email);

        card.appendChild(image);
        card.appendChild(info);

        teamGrid.appendChild(card);
    });

    // Scroll smoothly to a section when a navigation link is clicked
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Call the function to generate team member cards
generateTeamMembers();

// Add the following function to calculate the countdown
function updateCountdown() {
    const launchDate = new Date('July 1, 2024 00:00:00 GMT+0000').getTime();
    const currentDate = new Date().getTime();
    const timeDifference = launchDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

// Helper function to format time (add leading zero)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Call the updateCountdown function
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
