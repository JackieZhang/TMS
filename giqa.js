// ==UserScript==
// @name       google input quick access
// @namespace  http://
// @version    0.1
// @description  quick access input
// @match      https://www.google.com.hk/*
// @copyright  2014+, me
// ==/UserScript==

//add timeout, maybe it's changed by other js
setTimeout("document.getElementById('lst-ib').setAttribute('accesskey','1');",5000);
//console.log(document.getElementById('lst-ib'));
