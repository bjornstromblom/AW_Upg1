$(function(){

	if(!Modernizr.touch){
		$("#touchContent p").html("This element requires Touch");
	}
	$("#addStuffWjQuery").click(function(){
		$("body").append("<div><p>Added by jQuery</p></div>")
	})

})