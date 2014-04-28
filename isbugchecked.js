// ==UserScript==
// @name       isBugChecked
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.wooyun.org/bugs/*
// @copyright  2012+, You
// ==/UserScript==

var checkedlist = {};
var storage = window.localStorage;

if(storage['checkedlist'] == undefined){
    storage.setItem('checkedlist',JSON.stringify(checkedlist));
}

checkedlist = JSON.parse(storage.getItem("checkedlist"));

bugid = $('h3 a:eq(0)').text().substr(7);
if(checkedlist[bugid] != undefined){
    $('h3 a:eq(0)').parent().append('<del><font color="red">&nbsp;&nbsp;已查看&nbsp;&nbsp;</font></del>');
}
else{
    $('h3 a:eq(0)').parent().append('&nbsp;&nbsp;<input type=button class=hide value=hide style="width:400px;" />');
    $('.hide').click( function(){
        checkedlist[bugid]=1;
    	$(this).hide();
        $('h3 a:eq(0)').parent().append('<del><font color="red">&nbsp;&nbsp;已查看&nbsp;&nbsp;</font></del>');
    	storage.setItem("checkedlist",JSON.stringify(checkedlist));
});
}
