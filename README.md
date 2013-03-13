lurk-more
==============

![lurk-more screenshot](https://github.com/stuartdb/lurk-more/raw/master/img/lurk-more-shot.png)

A userscript for quickly opening your bookmarked threads which have new posts on the Something Awful forums. Adds a link on your usercp page.

Installation
---------

You will need to have the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) addon installed.

Navigate to the raw '''/lurk-more.user.js''' file in this repository or [click here](https://github.com/stuartdb/lurk-more/raw/master/lurk-more.user.js) and it should install the script.

If you happen to be using the browser [dwb](http://portix.bitbucket.org/dwb/), then copy the '''lurk-more.user.js''' script into '''~/.config/dwb/scripts/''' directory and restart. You will need to have the following settings set:

'''enable-scripts''' to '''true'''
'''javascript-can-open-windows-automatically''' to '''true'''

I highly recommend the following settings:

'''tabbed-browsing''' to '''true'''
'''background-tabs''' to '''true'''

Otherwise dwb will open every thread that has new posts in a new window.


License
-------

lurk-more is released under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html)
