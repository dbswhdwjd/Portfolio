var content_title=$("#content-title ul li");
var line=$("#content-title ul li span");
var content=$("#contents>div")
$("#contents>div").hide().eq(0).show();
console.log(line)

content_title.click(function(){
    var tg=$(this);
    var i=tg.index();
    line.removeClass("line");
    tg.find("span").addClass("line");
    content.css("display","none");
    content.eq(i).css("display","block");

});

$("#notice-title>a").click(function(){
    history.go(-1);
})