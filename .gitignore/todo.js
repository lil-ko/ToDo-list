// Toggle "Add new" option
$("#plus").click(function(){
	$("#addNew").slideToggle( 500, function() {
    $("#addNew").val("");
  });
});

// Add an item
$("#addNew").keypress(function(event){
	if(event.which === 13){
		var user_item = $(this).val();
		console.log("adding new entry " + user_item);
		
		$("ul").prepend('<li><div class="item"><button class="hidden"><i class="far fa-trash-alt"></i></button><span class="item-name">' + user_item + '</span></div></li>');
	    $(this).val("");
	} 
});

// Toggle "Delete" icon
$("ul").on("mouseenter mouseleave", "li", function() {
	$(this).find("button").animate({width: 'toggle'}, 100);
	console.log("hovering over " + $(this).find(".item-name").val());
	
});

// Delete an item
$("ul").on("click", "button", function() {
	$(this).parent().parent().fadeOut( 500, function() {
	$(this).remove();
  });
});

// Cross out an item
$("ul").on("click", ".item-name", function() {
	$(this).toggleClass("crossed");
});