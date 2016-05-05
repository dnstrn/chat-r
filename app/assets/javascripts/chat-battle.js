$.get("/messages", function(messages){
  for(var i = 0; i < messages.length; i++){
    console.log(messages[i].body);
  }
});

$.post("/messages", {body: ":)"}, function(data){
  console.log(data)
});

$.ajax({
  url: "/messages/116886",
  method: "PATCH",
  data: {body: "HEY!!"}
});
