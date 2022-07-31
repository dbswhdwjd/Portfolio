var true1=true

function withedown(){
	var login_in2=$('.login_in2');
	$(login_in2).click(function(){
		if($(this).next('.language_menu').css('display')==='none'){
			$(this).next('.language_menu').show();
			$(this).addClass('active');
		}else{
			$('.language_menu').hide();
		 	$(this).removeClass('active');
		}
	});
};
withedown();

var $slideWrap=document.querySelector('.main_visual'),
	$slideContainer = document.querySelector('.main_visual .main_visual_img'),
	$stopBtn=document.querySelector('.stop_btn a'),
	$overBtn=document.querySelector('.over_btn'),
	$slide = document.querySelectorAll('.main_visual .main_visual_img .banner_img'),
	$navPrev = document.getElementById('prev'),
	$slideCount = $slide.length,
	$currentIndex = 0,//버튼이 시작할땐 좌로 가는 버튼 없애기
	$timer=undefined,
	$img=document.querySelector('.stop_btn a img'),
	$imgOn=$img.getAttribute('src'),
	$imgOff=$imgOn.replace('stop_btn','start'),
	$pager = document.querySelector('.indicator'),
	$true=true,
	$pagerBtn = document.querySelectorAll('.indicator li'),
	$navNext = document.getElementById('next');
	$imgOn.src = "hhh";
	
	var a = {src:"fff"};
	a.src = 'vvv';
	
	for(var a = 0; a < $slideCount; a++){
		$slide[a].style.left = a * 100 + '%'; 
	}
	
	// 슬라이드 이동 함수 
	function goToSlide(idx){
		$slideContainer.classList.add('animated');
		$slideContainer.style.left = -100 * idx + '%';
		$currentIndex = idx;   

		for(var y = 0; y <$pagerBtn.length; y++){
			$pagerBtn[y].classList.remove('active');
		}
		$pagerBtn[idx].classList.add('active');
	}//goToSlide

	goToSlide(0);
	
	 // 버튼을 클릭하면 슬라이드 이동시키기
	$navPrev.addEventListener('click',function(){            

		if($currentIndex == 0){
			goToSlide($slideCount - 1);
		}else{
			goToSlide($currentIndex - 1);
		} 
	});

	$navNext.addEventListener('click',function(){

	   if($currentIndex == $slideCount - 1){
		   goToSlide(0);
	   }else{
		   goToSlide($currentIndex + 1);
	   }
	});
	
	
	//자동 슬라이드
	startAutoSlide();
	function startAutoSlide(){
		$timer = setInterval(function(){
			var nextIdx =($currentIndex + 1) % $slideCount;
			goToSlide(nextIdx);
		},4000);
	}
	function stopAutoSlide(){
		clearInterval($timer);
	}
	
   $overBtn.addEventListener('mouseenter', function(){
	   stopAutoSlide();
   });
   $overBtn.addEventListener('mouseleave', function(){
	   startAutoSlide();
   });
   $stopBtn.addEventListener('click', function(){
	   
	   if($true==true){
		   stopAutoSlide();
		   this.querySelector('img').src= "img/start_icon02.png";
		   $true=false;
	   }else{
		   startAutoSlide(); 
		   this.querySelector('img').src=$imgOn;
		   $true=true;
	   }
	   
   });
   
   for(var x=0; x<$pagerBtn.length; x++){
	   $pagerBtn[x].addEventListener('click',function(event){
		  
			var pagerNum =event.target.innerText - 1;
			goToSlide(pagerNum);
		  
			//클릭된 그 요소에만 active 추가
			for(var y=0; y <$pagerBtn.length; y++){
				$pagerBtn[y].classList.remove('active');
			}
			event.target.classList.add('active');
	   });
   }

   $(function(){
	var banner=$('.slideUl>li');
	var leftBtn=$('.post_imagerea .prev'); 
	var rightBtn=$('.post_imagerea .next'); 
	var current=0;
	var setIntervalId;
	

	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=banner.eq(current);
			move(prev,0,'-100%');
			current++;
			if(current==banner.size()){current=0;};
			var next=banner.eq(current);
			move(next,'100%',0);
		},3000);
	}
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	

	
	/* 양쪽 화살표 */
	rightBtn.click(function(){
		var prev=banner.eq(current);
		move(prev,0,'-100%');
		current++;
		if(current==banner.size()){current=0;}
		var next=banner.eq(current);
		move(next,'100%',0);	
	});
	leftBtn.click(function(){
		var prev=banner.eq(current);
		move(prev,0,'100%');
		current--;
		if(current==-banner.size()){current=0;}
		var next=banner.eq(current);
		move(next,'-100%',0);		
		});
	
	function move1(i){
		if(current==i) return;
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'-100%'},500);
		nextEl.css('left','100%').stop().animate({left:0},500);
		current=i;
	}
	function move2(i){
		if(current==i) return;
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("left","0").stop().animate({left:'100%'},500);
		nextEl.css('left','-100%').stop().animate({left:0},500);
		current=i;		
	}
});

var tab=$('.tab_navi>li');
var tab_content=$('.post_text>ul');
tab_content.hide().eq(0).show();
tab.click(function(){
    var tg=$(this);
    var i=tg.index();
    tab.removeClass('active');
    tg.addClass('active')
	tab_content.css('display','none');
	tab_content.eq(i).css('display','block');
    return false;
});







window.onload = function() {
 
    function onClick() {
        document.querySelector('.popup').style.display ='block';
      
    }   
    function offClick() {
        document.querySelector('.popup').style.display ='none';
       
    }
 
    document.querySelector('.list_btn').addEventListener('click', onClick);
    document.querySelector('.close-button').addEventListener('click', offClick);
 
};






