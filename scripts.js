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
        
        // Scroll to the top of the page
        window.scrollTo(0, 0);
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
        { name: 'João Ferro', role: 'Project Manager', email: 'jmsfo@iscte-iul.pt', image: 'joao-ferro.jpg  ' },
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
}

// Call the function to generate team member cards
generateTeamMembers();