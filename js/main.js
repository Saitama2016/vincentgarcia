$( () => {
    function activateSideNav () {
        $('#sideNavButton').click(function(e) {
            $('#sideNav').css("width", "500px");
        });
    }

    function smoothScroll() {
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top
             }, 500);

            $('#sideNav').css("width", "0px");
        });
    }

    function closeSideNav() {
        $('.closebtn').click(function(e) {
            $('#sideNav').css("width", "0px");
        });
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function slideButtons() {
        $('.prev').click(function(e) {
            plusSlides(-1);
        })

        $('.next').click(function(e) {
            plusSlides(1);
        })
    }

    function showSlides(n) {
      let i;
      let slides = $(".huluSlides");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slides[slideIndex-1].style.display = "block"; 
    }

    function handleEvents() {
        activateSideNav();
        smoothScroll();
        closeSideNav();
        slideButtons();
    }

    handleEvents();
});