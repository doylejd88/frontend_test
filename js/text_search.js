/**
 * Created by Doyle on 5/12/14.
 */

/**
 * Attach event listeners to the search form. Take into account older browser versions as well.
 */
if(window.addEventListener){
    window.addEventListener("load", searchInit, false);
} else if(window.attachEvent){ //IE < 9
    window.attachEvent("onload", searchInit);
} else{
    document.addEventListener("load", searchInit, false);
}

/**
 * Initialize the search button to execute our Javascript search.
 */
function searchInit(){
    var button = document.getElementById("search-button");
    if(button.addEventListener){
        button.addEventListener("click", findOccurrences, false);
    } else if(button.attachEvent){ //IE < 9
        button.attachEvent("onclick", findOccurrences);
    }
}

/**
 * function findOccurances() - Finds instances of a string within the given search text.
 *      Strips out all HTML to provide accurate searching
 *      Converts all text to lowercase in order to match the string value and find all occurances.
 * @param searchTerm
 * @returns {boolean}
 */
function findOccurrences(){
    var position = 0;
    var occurrences = 0;

    var matchCase = document.getElementById("match-case").checked;
    var searchTerm = document.getElementById("search_input").value;
    var termLength = searchTerm.length;

    var term = searchTerm;
    //Get the searchable content and strip out the HTML markup.
    var html = document.getElementById("search_text");
    var searchableContent = html.textContent || html.innerText || "";


    //Lowercase all of our content so that we can find all matches of the string.
    if(matchCase == 0){
        searchableContent = searchableContent.toLowerCase();
        term = searchTerm.toLowerCase();
    }


    while(true){
        position = searchableContent.indexOf(term, position);
        if(position >= 0){
            occurrences++;
            position += termLength;
        }
        else {
            break;
        }
    }
    //Set the text on the page.
    document.getElementById("searchOccurrences").innerText = occurrences;
    document.getElementById("searchTerm").innerText = searchTerm;
    return false;

}

/**
 * function executeClick() - Modify the default behaviour of hitting the enter key in the textbox in order to
 * execute the javascript click event rather than a form submit.
 * @param buttonID - The ID of the button to click.
 * @param e - The event that has been executed (Keyboard button)
 */
function executeClick(buttonID, e){
    if(e.keyCode == 13){
        var clicked = document.getElementById(buttonID);
        if(clicked){
            clicked.click();
            event.preventDefault();
        }
    }
}