// ==UserScript==
// @name Lurk-More
// @version 1.0.0
// @namespace https://github.com/stuartdb/lurk-more
// @author Stuart Baker
// @description Opens all bookmarked threads with new posts in new tabs
// @include *://forums.somethingawful.com/usercp*
// @grant GM_openInTab
// @downloadURL https://github.com/stuartdb/lurk-more/raw/master/lurk-more.user.js
// @updateURL https://github.com/stuartdb/lurk-more/raw/master/lurk-more.meta.js
// @run-at document-end
// ==/UserScript==

function get_count_elements() {
    "use strict";
    return document.getElementsByClassName("count");
}

function open_unread_threads() {
    "use strict";
    var i = 0,
        link_base = "http://forums.somethingawful.com",
        link = "",
        count_elements;

    count_elements = get_count_elements();

    for (i = 0; i < count_elements.length; i = i + 1) {
        link = link_base + count_elements[i].getAttribute("href");
        GM_openInTab(link);
    }
}

function create_header(post_count, thread_count) {
    "use strict";
    var h2 = document.createElement("h2"),
        a = document.createElement("a");

    h2.textContent = ("Bookmarked Threads | " +
                      post_count + " New Posts In " +
                      thread_count + " Threads | ");

    a.setAttribute("href", "#");
    a.addEventListener("click", open_unread_threads, true);
    a.textContent = ("View All New Posts");
    h2.appendChild(a);
    return h2;
}

function insert_count_header() {
    "use strict";
    var i = 0,
        post_count = 0,
        count_elements,
        new_header,
        old_header,
        bookmarks;

    count_elements = get_count_elements();
    bookmarks = document.getElementsByClassName("standard bookmarked_threads");

    for (i = 0; i < count_elements.length; i = i + 1) {
        post_count += parseInt(count_elements[i].text, 10);
    }

    new_header = create_header(post_count, count_elements.length);
    old_header = bookmarks[0].firstElementChild;
    bookmarks[0].replaceChild(new_header, old_header);
}

insert_count_header();
