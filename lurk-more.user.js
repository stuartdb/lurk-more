// ==UserScript==
// @name           	Lurk-More
// @version        	0.1.1
// @namespace      	https://github.com/stuartdb/lurk-more
// @author         	Stuart Baker
// @description    	Allows quickly opening your bookmarked threads which have new posts on SA.
// @include        	*://forums.somethingawful.com/usercp*
// @grant   		GM_openInTab
// @downloadURL    	https://github.com/stuartdb/lurk-more/raw/master/lurk-more.user.js
// @updateURL    	https://github.com/stuartdb/lurk-more/raw/master/lurk-more.meta.js
// @run-at 			document-end
// ==/UserScript==

function calulateNewPosts() {
	var newPosts = document.getElementsByClassName("count");

	var postCount = 0;

	for (var i = 0; i < newPosts.length; i++) {
	 	postCount += parseInt(newPosts[i].text, 10);
	};

	linkElement = createNewPostsElement(postCount, newPosts.length);

	editButton = document.getElementById("bookmark_edit_attach");
	editButton.parentNode.insertBefore(linkElement, editButton);
}

function createNewPostsElement(count, threads) {

	e = document.createElement("em");
	e.textContent = ("There are " + count + " new posts in " + threads + " threads. ");
	
	a = document.createElement("a");
	a.setAttribute("href", "#");
	a.setAttribute("onclick", "openUnreadLinks()");
	a.textContent = ("Click here to view.");

	e.appendChild(a);

	return e;
}


function openUnreadLinks() {
	var newPosts = document.getElementsByClassName("count");

	for (var i = 0; i < newPosts.length; i++) {
		link = "http://forums.somethingawful.com/" + newPosts[i].getAttribute("href");
		GM_openInTab(link);
	};

}

calulateNewPosts();