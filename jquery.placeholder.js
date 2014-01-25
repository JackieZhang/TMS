
if(typeof(Worker) == "undefined"){ //check html5 support
function placeholder(select, holder){
$(select).val(holder);

$(select).focus(function(){
if($(select).val() == holder){
$(select).val('');
}
});

$(select).blur(function(){
if($(select).val() == ''){
$(select).val(holder);
}
});

}


for (var t in $("[placeholder]")){
placeholder("[placeholder]:eq("+t+")", $("[placeholder]:eq("+t+")").attr('placeholder'));
}
}
