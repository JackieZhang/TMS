// ==UserScript==
// @name         WooCopy
// @namespace    http://your.homepage/
// @version      0.1
// @description  copy title and url with js
// @author       You
// @match        http://www.wooyun.org/bugs/*
// @require https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.1/clipboard.min.js
// @grant        none
// ==/UserScript==

$('h2:eq(2)').append('&nbsp;&nbsp;<input type=button id=cpy value=COPY style="width:300px;" />');

new Clipboard('#cpy', {
    text: function(trigger) {
        return document.title.split("|")[0]+"  "+location.href;
        //return trigger.getAttribute('aria-label');
    }
});
