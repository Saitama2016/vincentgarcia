$( () => {
    function activateSideNav () {
        $('#sideNavButton').click(function(e) {
            console.log("click!")
        });
    }

    function handleEvent() {
        activateSideNav();
    }

    handleEvent();
});