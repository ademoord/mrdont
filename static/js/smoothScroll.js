$(document).ready(function() {
  // Smooth scrolling for navbar links
  $('.navbar-nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800, // Adjust scrolling speed here
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });
});