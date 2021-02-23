$( () => {
    function activateSideNav () {
        $('#sideNavButton').click(function(e) {
            $('#sideNav').css("width", "100%");
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

    function activateNightMode() {
        $('.nightMode').click(function(e) {
            $('.bullDogMindsetLink').css("color", "lightblue");
            $('.honestGraduateLink').css("color", "lightblue");
            $('body').css("background", "black");
            $('.description, .referral, .headline, .hook, .devTitle').css("color", "white");
            $('.listItem, .techStack').css("color", "white");
            $('.dayMode').show();
            $('.nightMode').hide();
        })
    }

    function activateDayMode() {
        $('.dayMode').click(function(e) {
            $('.bullDogMindsetLink').css("color", "blue");
            $('body').css("background", "white");
            $('.description, .referral, .headline, .hook, .devTitle').css("color", "black");
            $('.listItem, .techStack').css("color", "black");
            $('.dayMode').hide();
            $('.nightMode').show();
        })
    }

    function closeSideNav() {
        $('.closebtn').click(function(e) {
            $('#sideNav').css("width", "0px");
        });
    }


    function handleEvents() {
        activateNightMode();
        activateDayMode();
        activateSideNav();
        smoothScroll();
        closeSideNav();
    }

    handleEvents();
});