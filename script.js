document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Toggle About Us dropdown menu visibility
const aboutUsButton = document.getElementById('about-us-button');
const aboutUsDropdown = document.getElementById('about-us-dropdown');

aboutUsButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent closing the dropdown when clicking on the button itself
    aboutUsDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking anywhere outside of the dropdown
document.addEventListener('click', function (e) {
    if (!aboutUsDropdown.contains(e.target) && !aboutUsButton.contains(e.target)) {
        aboutUsDropdown.classList.add('hidden');
    }
});