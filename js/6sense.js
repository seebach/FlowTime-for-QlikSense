

$(function() {
  $("#toogleOverview").click(function(e) {
  Flowtime.toggleOverview(false);
  $("#showInOverview-Qlik").toogle();
  $("#showInOverview-Blue").toogle();
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
  if( e.progress == 3 ) {
    app.bookmark.apply('KwKxY');
    $("#CurrentSelections").show("slow");

  } else if( e.progress == 4 ) {
      app.bookmark.apply('PArzPaM');
      $("#CurrentSelections").show("slow");
    } else if( e.progress == 6 ) {
        app.bookmark.apply('kEPJJf');
        $("#CurrentSelections").show("slow");

  } else {
  //  hide stuff
  $("#CurrentSelections").hide("slow");

  app.clearAll();
  }

}
