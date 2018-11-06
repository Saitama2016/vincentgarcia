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

    function handleEvents() {
        activateSideNav();
        smoothScroll();
        closeSideNav();
    }

    handleEvents();
});