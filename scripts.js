function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    mainContent.style.marginLeft = mainContent.style.marginLeft === '250px' ? '0' : '250px';
}
