/**
 * Created by Doyle on 5/12/14.
 */


var tabItems = '';
var tabLinks = '';
var tabCount = 0;

/**
 * function tabInit() - Sets up the tab-container element for the use of tabs. Allow for any set of <div> tags within the
 * container id="tab-container" to be made into a tabbed list.
 *
 * @TODO Extend this so that it only targets the first level div elements. We will want to allow the use of child divs
 * at some point.
 */
function tabInit(){
    //set globals based on page information
    var tabs = document.getElementById('tab-container');
    tabItems = tabs.getElementsByTagName('div');
    tabCount = tabItems.length;

    var wrapper = document.createElement("ul");
    //Add tab options based on text.
    for(var i = 0; i < tabCount; i++){
        var tab = document.createElement("li");
        tab.id = 'tab-item-' + (i + 1);
        tab.className = 'hidden';
        tab.innerHTML = '<a id="tab-'+(i + 1)+'" href="#tab-'+(i + 1)+'" onClick="showTab(this)">Tab '+(i + 1)+'</a>';
        wrapper.appendChild(tab);
        tabItems[i].id = 'slide-tab-' + (i + 1);

    }

    tabs.insertBefore(wrapper, tabs.firstChild);
    //set the first item to display by default
    document.getElementById('slide-tab-1').style.display = 'block';
    document.getElementById('tab-item-1').className = 'active';
    tabLinks = tabs.getElementsByTagName('li');
}

/**
 * function showTab() - Hide/Show the tab based on the triggering element. The links and id's are generated in the tabInit()
 * function so we will always know what they will be.
 *
 * @param element - The triggering tab
 */
function showTab(element){
    //reset displays of all tabs and links.
    for(var i = 0; i < tabCount; i++){
        tabItems[i].style.display = 'none';
        tabLinks[i].className = 'hidden';
    }
    //set active tab content and link.
    element.parentNode.className = 'active';
    document.getElementById('slide-' + element.id).style.display = 'block';
}
