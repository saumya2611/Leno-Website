document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    console.log('toggleButton ==========>',toggleButton);
    
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    console.log('mobileMenu===>',mobileMenu);
    
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })

    // Video Model
    const model = document.getElementById('videoModel');
    console.log('Model ====>',model);
    const closeButton = document.querySelector('.model__close-button');
    const videoPlayer =  document.getElementById('videoPlayer')

    // Open Model When clicked
    const videoButton = document.querySelector('.preview__video-button');
    
    // Open model when clicked
    videoButton.addEventListener('click', function() {
        // Show Model
        model.style.display = 'block'

        // Replace the src attribute with the video URL
        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

        // Close model on close button click
        closeButton.addEventListener('click', function() {
             model.style.display = 'none'
             videoPlayer.src = '';
        })

        // Close model on outter click
        window.addEventListener('click', function(event) {
            if (event.target == model) {
                model.style.display = 'none'
                videoPlayer.src = '';
            }
        })
    })
})

// Navigation Background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar')

    if(window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    }
    else {
        navbar.classList.remove('navbar--scroll');
    }
})
