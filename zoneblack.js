// ==UserScript==
// @name       zone blacklist
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://zone.wooyun.org/
// @match	   http://zone.wooyun.org/p-*
// @copyright  2012+, You
// ==/UserScript==

//$('.threadlist').load('http://zone.wooyun.org/p-2 .threadlist');

var blacklist = {};
var storage = window.localStorage;

/*
function saveblacklist()
{
    //console.log('test');
storage.setItem("blacklist",JSON.stringify(blacklist));
t = setTimeout("saveblacklist()",60000);
}
*/

$('.thread-title').append('<input type=button class=hide value=hide />');
$('.hide').click( function(){
    hr = $(this).parent().children()[0].href;
    //console.log($(this).parent().children()[0].href);
    blacklist[parseInt(hr.substr(hr.lastIndexOf('/')+1))] = 1;
    $(this).parent().parent().hide();
    storage.setItem("blacklist",JSON.stringify(blacklist));
});


var mon = new Date().getMonth();

if(storage['mon'] == undefined){
    storage.setItem('mon',mon);
}
if(parseInt(storage['mon']) != mon){//clear freq: one month
    storage.clear();
    storage['mon'] = mon;
}

if(storage['blacklist'] == undefined){
    storage.setItem('blacklist',JSON.stringify(blacklist));
}

blacklist = JSON.parse(storage.getItem("blacklist"));

var al = $('div.thread-title a');

for(var i in al){
    var hr = al[i].href;
    if(hr != undefined){
    	var articleid = parseInt(hr.substr(hr.lastIndexOf('/')+1));
        if(blacklist[articleid] != undefined){
            $('div.thread-title:eq('+i+')').parent().hide();
        }    
    }
}

//setTimeout(saveblacklist,60000);
