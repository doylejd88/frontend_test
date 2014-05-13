/**
 * Created by Doyle on 5/12/14.
 */


/**
 * function findOccurances() - Finds instances of a string within the given search text.
 *      Strips out all HTML to provide accurate searching
 *      Converts all text to lowercase in order to match the string value and find all occurances.
 * @param searchTerm
 * @returns {boolean}
 */
function findOccurrences(searchTerm){
    var position = 0;
    var occurrences = 0;
    var termLength = searchTerm.length;
    var lowerTerm = searchTerm.toLowerCase();
    //Get the searchable content and strip out the HTML markup.
    var html = document.getElementById("search_text");
    var searchableContent = html.textContent || html.innerText || "";

    //Lowercase all of our content so that we can find all matches of the string.
    searchableContent = searchableContent.toLowerCase();


    while(true){
        position = searchableContent.indexOf(lowerTerm, position);
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