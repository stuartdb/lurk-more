// ==UserScript==
// @name Lurk-More
// @version 0.2.0
// @namespace https://github.com/stuartdb/lurk-more
// @author Stuart Baker
// @description Opens all bookmarked threads with new posts in new tabs
// @include *://forums.somethingawful.com/usercp*
// @grant GM_openInTab
// @downloadURL https://github.com/stuartdb/lurk-more/raw/master/lurk-more.user.js
// @updateURL https://github.com/stuartdb/lurk-more/raw/master/lurk-more.meta.js
// @run-at document-end
// ==/UserScript==

function calculateNewPosts() {
    var newPosts = document.getElementsByClassName("count");

    var postCount = 0;

    for (var i = 0; i < newPosts.length; i++) {
        postCount += parseInt(newPosts[i].text, 10);
    }

    newh2 = createNewHeader(postCount, newPosts.length);


    bookmarks = document.getElementsByClassName("standard bookmarked_threads");
    bookmarks = bookmarks[0];
    oldh2 = bookmarks.firstElementChild;
    bookmarks.replaceChild(newh2, oldh2);

}

function createNewHeader(count, threads) {

    e = document.createElement("h2");
    e.textContent = ("Bookmarked Threads | " + count +
                     " New Posts In " + threads + " Threads | ");

    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.addEventListener("click", openUnreadLinks, true);
    a.textContent = ("View All New Posts");

    e.appendChild(a);

    return e;
}


function openUnreadLinks() {
    var newPosts = document.getElementsByClassName("count");

    for (var i = 0; i < newPosts.length; i++) {
        link = "http://forums.somethingawful.com" +
            newPosts[i].getAttribute("href");
        GM_openInTab(link);
    }

}

calculateNewPosts();
