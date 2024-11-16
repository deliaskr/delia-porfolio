let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Event listener untuk scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Memperbaiki selector dengan menghapus spasi
                let currentLink = document.querySelector('header nav a[href*=' + id + ']');
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            });
        }
    });
};

// Event listener untuk menu icon
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};