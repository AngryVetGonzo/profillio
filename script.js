$(document).ready(function(){
    $("button").click(function(){
        $("#dojo").toggle();
    });

    $("#bike img").click(function(){
    	var source = $(this).attr("src");
    	$(this).attr("src", $(this).attr("data-alt-src"));
    	$(this).attr("data-alt-src", source);
  	});
});