

$(function() {
  $("#toogleOverview").click(function(e) {
  Flowtime.toggleOverview(false);
  toggleOverViewCustom();
//    e.preventDefault(); // if desired...
    // other methods to call...
  });
});

/*
window.setInterval(function(){
//  $( document ).click(function() {
    $( ".pos-snail-appstore" ).effect( "shake" ,{times:4}, 1000 );
//});
}, 3000);
*/

function flowController (e) {
   // alert(e.progress);
   console.log(e.progress);
  if( e.progress == 5 ) {
    $("#CurrentSelections").show("slow");
    //app.bookmark.apply('FrLAZp');
//    app.clearAll();

  } else if( e.progress == 6 ) {
      $("#CurrentSelections").show("slow");
//      app.bookmark.apply('PArzPaM');
// app.clearAll();

    } else if( e.progress == 7 ) {
        $("#CurrentSelections").show("slow");
//        app.bookmark.apply('yfSRF');

  } else {
  //  hide stuff
  $("#CurrentSelections").hide("slow");
  // app.clearAll();

//  app.clearAll();
  }

}
