/**
 * Created by Doyle on 5/12/14.
 */

var duration = 1000; //transition duration
var showtime = 3000; //duration the image should be shown
var slides = 0; //total number of slides (Set in pageInit())
var index = 0; //current slide index (Set in pageInit())
var rotator = ''; //rotator object (Set in pageInit())

/**
 * Initialize the slider functionality. Allow for an unknown number of slides by setting the ID's
 * after the page is loaded.
 */
function pageInit(){
    //set globals based on page information
    rotator = document.getElementById('rotator');
    var rotatorChildren = rotator.getElementsByTagName('div');
    slides = rotatorChildren.length;


    //Setup the images with unique classes.
    for(var i = 0; i < slides; i++){
        rotatorChildren[i].id = 'slide' + (i+1);
        rotatorChildren[i].className = 'hide';
    }
    //set first slideshow item to "show"
    document.getElementById('slide' + 1).className = 'show';
    fadeObject()
}


/**
 * function fadeObject()
 * Starts the slideshow
 */
function fadeObject(){
    index = 1;
    setTimeout("fadeOut()", showtime);
}

/**
 * function fadeOut()
 * Sets timer of the fade-out before bringing in the next image.
 */
function fadeOut(){
    setTimeout("fadeIn()", duration );
}

/**
 * function fadeIn()
 * Brings in the new image. Modifies CSS classes on the items to be displayed. The classes control the transitions using
 * CSS3 so we don't need to do the opacity calculations inside of our JS.
 *
 * Sets a timer of the display duration + transition time to control view.
 */
function fadeIn(){
    if(index == slides){
        index = 1;
        document.getElementById('slide' + index).className = 'show';
        document.getElementById('slide' + slides).className = "hide";
    }
    else {
        document.getElementById('slide' + (index + 1)).className = 'show';
        document.getElementById('slide' + index).className = "hide";
        index = index + 1;
    }
    setTimeout("fadeOut()", duration + showtime);
}

