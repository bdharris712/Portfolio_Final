$(".experiment").click(function(e) {
    e.preventDefault();
    for (var i = 0; i < 3; i++ ) {
        $(".experiment")
            .animate( { backgroundColor: "#f00" }, 2000 )
            .animate( { backgroundColor: "transparent" }, 2000 );
    }
});

$(document).ready(function(){
    $(".pulse-button").click(function(){
      $(".resume").slideToggle();
    });
  });