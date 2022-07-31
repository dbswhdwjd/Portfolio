var content=$(".basket-content>div")
content.hide().eq(0).show();
$(".basket-title ul li").click(function(){
    var tg=$(this);
    var i=tg.index();
    $(".basket-title ul li").removeClass("active");
    tg.addClass("active");
    content.css("display","none");
    content.eq(i).css("display","block")
})

$("#basket-title>a").click(function(){
    history.go(-1);
});