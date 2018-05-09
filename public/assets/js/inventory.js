$("#add-btn").on("click", function(event){
  event.preventDefault();

  var newInventory = {
    item: $("#item").val().trim(),
    category: $("#category").val().trim(),
    size: $("#size").val().trim(),
    color: $("#color").val().trim(),
  };

  $.post("/api/new", newInventory)
  .done(function(data){
    console.log(data);
  });
  $("#item").val();
  $("category").val();
  $("#size").val();
  $("#color").val();

});