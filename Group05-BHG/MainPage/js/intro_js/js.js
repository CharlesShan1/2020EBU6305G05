
// 移动端员工活动
var screen_w=window.innerWidth;
var MobileWidth=375;
var IsMobile=false;

if(screen_w<=MobileWidth){
IsMobile=true;
}else{
IsMobile=false;
}
if(IsMobile) {
$('.student .type-box .row .item .label').css('display', 'none')
$('.student .type-box .row .item .mask-bg').css('background','none')
}

//This line resize the content when resize the screen
window.onresize = resize;
function resize(){
	// Title
	varo=document.getElementById("videobox");
	varo1=document.getElementById("txtline");
	varo1.style.marginTop=(varo.offsetHeight-varo1.offsetHeight)/3+"px";
	varo1.style.marginLeft=(varo.offsetWidth-varo1.offsetWidth)/2+"px";
	
}

//Change Shuffling figure
function change_shuffling_figure1(){
	var resp_area_banner_time;
	var resp_area_index = 0;
	var resp_area_width = $('#slidearea1').width();
	var resp_area_len = $('#slidelist1 li').length;
	function resp_area_banner1(l){
		if(l){
			resp_area_index--;
			resp_area_index = resp_area_index < 0 ? resp_area_len-1 : resp_area_index;
		}else{
			resp_area_index++;
			resp_area_index = resp_area_index < resp_area_len ? resp_area_index : 0;
		}
	
		$('#slidelist1 li').removeClass('active');
		$('#slidelist1 li').eq(resp_area_index).addClass('active');
	}
	var resp_area_banner_time = setInterval(resp_area_banner1,4000);
	
	$('#slidearea1 .icon_arrow').on('click',function(){
		clearInterval(resp_area_banner_time);
		if($(this).hasClass('icon_arrow_l')){
			resp_area_banner1(1);
		}else{
			resp_area_banner1();
		}
		resp_area_banner_time = setInterval(resp_area_banner1,4000);
	})
}
//Change Shuffling figure
function change_shuffling_figure2(){
	var resp_area_banner_time;
	var resp_area_index = 0;
	var resp_area_width = $('.resp_area .slidearea2').width();
	var resp_area_len = $('.resp_area .slidelist2 li').length;
	function resp_area_banner2(l){
		if(l){
			resp_area_index--;
			resp_area_index = resp_area_index < 0 ? resp_area_len-1 : resp_area_index;
		}else{
			resp_area_index++;
			resp_area_index = resp_area_index < resp_area_len ? resp_area_index : 0;
		}
	
		$('.resp_area .slidelist2 li').removeClass('active');
		$('.resp_area .slidelist2 li').eq(resp_area_index).addClass('active');
	}
	var resp_area_banner_time = setInterval(resp_area_banner2,3800);
	
	$('.resp_area .slidearea2 .icon_arrow').on('click',function(){
		clearInterval(resp_area_banner_time);
		if($(this).hasClass('icon_arrow_l')){
			resp_area_banner2(1);
		}else{
			resp_area_banner2();
		}
		resp_area_banner_time = setInterval(resp_area_banner2,3800);
	})
}

//Change Shuffling figure
function change_shuffling_figure3(){
	var resp_area_banner_time;
	var resp_area_index = 0;
	var resp_area_width = $('.resp_area .slidearea3').width();
	var resp_area_len = $('.resp_area .slidelist3 li').length;
	function resp_area_banner3(l){
		if(l){
			resp_area_index--;
			resp_area_index = resp_area_index < 0 ? resp_area_len-1 : resp_area_index;
		}else{
			resp_area_index++;
			resp_area_index = resp_area_index < resp_area_len ? resp_area_index : 0;
		}
	
		$('.resp_area .slidelist3 li').removeClass('active');
		$('.resp_area .slidelist3 li').eq(resp_area_index).addClass('active');
	}
	var resp_area_banner_time = setInterval(resp_area_banner3,3500);
	
	$('.resp_area .slidearea3 .icon_arrow').on('click',function(){
		clearInterval(resp_area_banner_time);
		if($(this).hasClass('icon_arrow_l')){
			resp_area_banner3(1);
		}else{
			resp_area_banner3();
		}
		resp_area_banner_time = setInterval(resp_area_banner3,3500);
	})
}

//  Init
window.onload = load;
function load(){
	resize();
	change_shuffling_figure1();
	change_shuffling_figure2();
	change_shuffling_figure3();
}

function test(){
	alert(varo=document.getElementById("videobox").offsetWidth);
}