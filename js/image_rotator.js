/**
 * Created by Doyle on 5/12/14.
 */


(function(){

    var duration = 1000; //transition duration
    var showtime = 3000; //duration the image should be shown
    var slides = 0; //total number of slides (Set in pageInit())
    var index = 0; //current slide index (Set in pageInit())

    /**
     * Initialize the slider functionality. Allow for an unknown number of slides by setting the ID's
     * after the page is loaded.
     */
    function pageInit(){
        //set globals based on page information
        var rotatorChildren = document.getElementsByClassName('slide');
        slides = rotatorChildren.length;


        //Setup the images with unique classes.
        for(var i = 0; i < slides; i++){
            rotatorChildren[i].id = 'slide' + i;
            rotatorChildren[i].className += ' hide';
        }
        //set first slideshow item to "show"
        var item = document.getElementById('slide0');
        item.className = item.className.replace(" hide", " show");
        fadeObject()
    }


    /**
     * function fadeObject()
     * Starts the slideshow
     */
    function fadeObject(){
        index = 0;
        setTimeout(fadeOut, showtime);
    }

    /**
     * function fadeOut()
     * Sets timer of the fade-out before bringing in the next image.
     */
    function fadeOut(){
        setTimeout(fadeIn, duration );
    }

    /**
     * function fadeIn()
     * Brings in the new image. Modifies CSS classes on the items to be displayed. The classes control the transitions using
     * CSS3 so we don't need to do the opacity calculations inside of our JS.
     *
     * Sets a timer of the display duration + transition time to control view.
     */
    function fadeIn(){

        var prev = index;

        index = (index + 1) % slides;

        var current = document.getElementById('slide' + index);
        var prev = document.getElementById('slide' + prev);
        current.className = current.className.replace(" hide", " show");
        prev.className = prev.className.replace(" show", " hide");

        setTimeout(fadeOut, duration + showtime);
    }


    window.rotator = pageInit;

})()