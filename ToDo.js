$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if (event.which === 13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo+ "</li>");
	}
});

$('.add').click(function(){
	if ($("input[type = 'text']").css("display") === "none") {
		$(this).attr("class", "fas fa-minus add");
	}else{
		$(this).attr("class", "fas fa-plus add");
	}
	$("input[type = 'text']").fadeToggle();
});
