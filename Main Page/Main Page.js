$(document).ready(function(){
	$(".project_sub_nav").hide();
	$(document).mouseenter(function(){
		$("#home").mouseover(function(){
    		$(this).addClass("hover_main_nav");
    	});
		$("#projects").mouseover(function(){
       		$(".project_sub_nav").show("fast");
       		$(this).addClass("hover_main_nav");
    	});
    	$("#interest").mouseover(function(){
    		$(this).addClass("hover_main_nav");
    	});
    	$("#resume").mouseover(function(){
    		$(this).addClass("hover_main_nav");
    	});
    	$("#contact_me").mouseover(function(){
    		$(this).addClass("hover_main_nav");
    	});
	});

   	$(document).mouseleave(function(){
   		$(".project_sub_nav").stop(true, false).hide("fast");
   		$("#home").removeClass("hover_main_nav");
   		$("#projects").removeClass("hover_main_nav");
   		$("#interest").removeClass("hover_main_nav");
   		$("#resume").removeClass("hover_main_nav");
   		$("#contact_me").removeClass("hover_main_nav");
   	});

	$("#welcome_banner").mouseover(function(){
		$(".project_sub_nav").stop(true, false).hide("fast");
		$("#home").removeClass("hover_main_nav");
		$("#projects").removeClass("hover_main_nav");
		$("#interest").removeClass("hover_main_nav");
		$("#resume").removeClass("hover_main_nav");
   		$("#contact_me").removeClass("hover_main_nav");
	});

	$("#about").mouseover(function(){
		$(".project_sub_nav").stop(true, false).hide("fast");
		$("#home").removeClass("hover_main_nav");
		$("#projects").removeClass("hover_main_nav");
		$("#interest").removeClass("hover_main_nav");
		$("#resume").removeClass("hover_main_nav");
   		$("#contact_me").removeClass("hover_main_nav");
	});

	$("#footer").mouseover(function(){
		$("#home").removeClass("hover_main_nav");
		$(".project_sub_nav").stop(true, false).hide("fast");
		$("#projects").removeClass("hover_main_nav");
		$("#interest").removeClass("hover_main_nav");
		$("#resume").removeClass("hover_main_nav");
   		$("#contact_me").removeClass("hover_main_nav");
	});
// home
	$("#home").mouseover(function(){
		$(".project_sub_nav").stop(true, false).hide("fast"); 
		$("#projects").removeClass("hover_main_nav");
	});
// projects
	$("#projects").mouseover(function(){
		$("#home").removeClass("hover_main_nav");
		$("#interest").removeClass("hover_main_nav");
	});
// interests
	$("#interest").mouseover(function(){
		$(".project_sub_nav").stop(true, false).hide("fast");
		$("#projects").removeClass("hover_main_nav");
		$("#resume").removeClass("hover_main_nav");
	});
// resume
	$("#resume").mouseover(function(){
		$(".project_sub_nav").hide("fast");
		$("#projects").removeClass("hover_main_nav");
		$("#interest").removeClass("hover_main_nav");
   		$("#contact_me").removeClass("hover_main_nav");
	});
// contact me
	$("#contact_me").mouseover(function(){
		$(".project_sub_nav").hide("fast");
		$("#projects").removeClass("hover_main_nav");
		$("#resume").removeClass("hover_main_nav");
	});
// blank space
	$("#blank_space").mouseover(function(){
		$(".project_sub_nav").hide("fast");
		$("#projects").removeClass("hover_main_nav");
		$("#contact_me").removeClass("hover_main_nav");
	});
	
});