$(document).ready(escribir);

function escribir(){
	$("#typed").typed({
		strings: ["la app más fácil para disfrutar reuniones culturales."],
		typeSpeed: 50,	
	})	
		var menu = 0;
	
	$(".menu-movil").on('click',function(){
		$(".header").toggle('slow');
		$(".header").css("display","block");
		$(".menu").css("display","block");
		
	});

    new WOW().init();


}





