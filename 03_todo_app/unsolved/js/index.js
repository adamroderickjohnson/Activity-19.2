// Create event listener to enter items below
$("#enter").on("click", function(){
var task = $("#todoitem").val();
$("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-time'></div></div>");
});

// Create event listener to delete items below
$(document).on("click", ".x", function(){
$(this).parent().remove();
})
// Create event listener to toggle 
$(document).on("click", ".task", ".x", function(){
    $(this).toggleClass("done");
    if ($(this).hasClass("done")){
        $(this).find("div").removeClass("fa-times");
        $(this).find("div").addClass("fa-check");
    }else{
        $(this).find("div").addClass("fa-times");
    }
})