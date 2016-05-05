$(document).ready(function() {
  $.get("schem/messages", function(messages){
    for(var i = 0; i < messages.length; i++) {
      $("#messages").append("<li>" + messages[i].body + "</li>");
    }
  });

  $("form").on("submit", function(event){
    $.post("/messages", {body: $("textarea").val(), full_name: $("input[name='full_name']").val()}, function(data){
      $("#messages").prepend("<li data-id='"+ data.id + "'>" + $("textarea").val() + "<i>X</i></li>");
    });
    event.preventDefault();
  });

  $("#messages").on("click", "i.message-delete", function(){
    console.log(">>>>>> 1 >>>>>>>>");
    console.log(this);
    console.log(">>>>>>>1 >>>>>>>");
    $.ajax({
      url: "/messages/" + $(this).parent().data("id"),
      method: "DELETE",
      error: function(){
        alert("Failed delete");
      },
      success: function() {
        console.log(">>>>>> 2 >>>>>>>>");
        console.log(this);
        console.log(">>>>>>> 2 >>>>>>>");
        $(this).parent().fadeOut(1000);
      }.bind(this) // bind(this) will make `this` inside the function the same
                   // as `this` outside the fuction
    });
  });

   $("#messages").on("click", "i.message-flag", function(){
     console.log("inside message flag click");
     $.ajax({
       url: "/messages/" + $(this).parent().attr('data-id') + "/flag",
       method: "PATCH",
       error: function(){
         alert("Failed update");
       },
       success: function() {
         $(this).toggleClass('fa-flag-o').toggleClass('fa-flag');
       }.bind(this)
     });

 });

 setInterval(function(){
   $.get("/messages", function (messages) {
     $("#messages").html("");
     var flag_icon;
     for(var i = 0; i < messages.length; i++) {
       //console.log(messages[i].body);
       if (messages[i].flag === true)
       {
         flag_icon = "fa-flag";
       }
       else {
         flag_icon = "fa-flag-o";
       }
       $('#messages').prepend("<li data-id='" + messages[i].id + "'>" + messages[i].full_name + " says: " + messages[i].body + "<i class='message-delete'>X</i><i class='fa " + flag_icon + "  message-flag' aria-hidden='true'></i></li>")
     };
   });
 }, 3000);

// When the flag icon is clicked, submit patch to update flag

});
