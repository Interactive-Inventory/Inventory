
 
// Nav bar function
 $(document).ready(function(){
    $('.sidenav').sidenav();
  });


// <script type="text/javascript">
// $(document).ready(function() {
//     $("select").material_select();
// })

// $(document).ready(function() {
//     $(".button-collapse").sideNav();
// })
// </script>

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	 $('.slider').slider({full_width: true});

  }); // end of document ready
})




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
  $("#category").val();
  $("#size").val();
  $("#color").val();

});

// $.get("/api/all", function(data){

// })

