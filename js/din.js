$(document).ready(escribir);

function escribir(){
	$("#typed").typed({
		strings: ["la app especializada de recintos culturales de Villahermosa Tabasco."],
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





