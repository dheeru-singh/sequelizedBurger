/* global moment */

// When user clicks add-btn
$("#burger-submit").on("click", function(event) {
  event.preventDefault();
  
  // Make a newChirp object
  var newBurger = {
    burger_name: $("#brgr").val().trim(),
    devoured: false,
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
  
  };
  if($("#brgr").val().trim()===""){
    // alert("something");
     $("#alertburgerName").modal("toggle");
   }else{
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function(data) {
      // console.log(newBurger);
      $(".not-devored-section ul").prepend("<li><span>" + data.burger_name + "</span>"+
      "<input type='text' class='form-control' placeholder='Enter your name'/>"+
      "<button class='change-devoured btn' data-id='"+ data.id  
       +"' data-newdevour='true'>Devour it! </button></li>"
       
      );
     
    });

  // Empty each input box by replacing the value with an empty string
  $("#brgr").val("");
   }
  

});

getburger();

function getburger(){
$.get("/api/all", function(data) {

  if (data.length !== 0) {
    data.forEach(function (data) {
      if(data.devoured=== true){
        var row = $("<li>");
       row.append("<span>" + data.burger_name +  "</span>");
    
        $(".devored-section ul").prepend(row); 
      }else{
        var row = $("<li>");
        row.append("<span>" + data.burger_name + "</span>");
        row.append("<input type='text' class='form-control' placeholder='Enter your name'/>");
        row.append("<button class='change-devoured btn' data-id='"+ data.id 
        +"' data-newdevour='true'>Devour it! </button>");
        $(".not-devored-section ul").prepend(row); 
      }
      
    });

  }

});
}
$(document).on("click", ".change-devoured", changeDevouredFctn);
function changeDevouredFctn(){
  console.log("hey i am clicked");
  var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };
    var spanVal=$(this).closest("li").find("span")[0].textContent;
    var inputval=$(this).closest("li").find("input[type=text]").val();
    
    console.log($(this).data("id"));
    console.log(spanVal + "(" + inputval + ")");
    if(inputval===""){
     // alert("something");
      $("#alertModel").modal("toggle");
    }else{
    var inputVar = spanVal + "(" + inputval + ")" ;

    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id,
      data: inputVar,
    }).then(function(){
      console.log(newDevour);
      location.reload(true);
      
     
    });

    }
    

};