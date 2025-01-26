// header hamberger menu

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});



// // food menu
document.addEventListener('DOMContentLoaded', function () {

    const tabLinks = document.querySelectorAll('.nav-pills .nav-link');
    
   
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
       
            event.preventDefault();

           
            tabLinks.forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

    
            this.classList.add('active');
            const targetPane = document.querySelector(this.getAttribute('href'));
            targetPane.classList.add('show', 'active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});

