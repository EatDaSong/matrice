
$('#rev-all').on('click',function(){
	$('.item').addClass("empty");
	$('.item').removeClass("filled");
});

$('#but-all').on('click',function(){
	$('.item').addClass("filled");
	$('.item').removeClass("empty");
});

$(".circle").on("click", function() {
	$('.item').removeClass("empty");
    $(this).toggleClass("filled");
}); 

$(".square").on("click", function() {
	$(this).toggleClass("filled");
}); 

$('.square').on('click',function() { 
	$(this).parent().children().removeClass('filled');
	$(this).parent().children().toggleClass("filled").removeClass('empty');
});

$('.diamond').on('click',function() {
	$('.diamond').toggleClass("filled");
	$(this).parent().children().toggleClass("filled");
	$('.last').toggleClass('filled');
});
