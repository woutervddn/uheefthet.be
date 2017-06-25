function fixResize(){

  $('.word').quickfit({
    'min':0,
    'max':9999,
    'truncate': false
  });
}

function fixSocial(){
  $(".icoFacebook").attr('href','https://www.facebook.com/sharer/sharer.php?u=uheefthet.be/%23' + encodeURI(window.location.hash.substr(1,window.location.hash.length-1)));

  $(".icoTwitter").attr('href','http://twitter.com/share?text=Hasselt%20heeft%20het,%20en%20nu%20ik%20ook!%20&url=http://uheefthet.be/%23' + encodeURI(window.location.hash.substr(1,window.location.hash.length-1)));


}

$(document).ready(function(){
  window.setInterval(fixResize, 500);
  if(window.location.hash) {
    // Fragment exists
    var theHash = window.location.hash.substr(3,(window.location.hash.length-3));
    fixSocial();
    var theWord = theHash.toUpperCase();
    var theLetter = theWord.substr(0,1);
    $("#theWord").text(theWord);
    $("#theLetter").text(theLetter);
    $("#wordmark").removeClass('hidden');
    $("#social").removeClass('hidden');
    //alert(theHash);
  } else {
    // Fragment doesn't exist
    $("#form").removeClass('hidden');
  }

  $("#submit").click(function(e){
    e.preventDefault();
    var theName = $("#name").val();
    window.location.hash = "#!/" + theName;
    fixSocial();
    var theHash = window.location.hash.substr(3,(window.location.hash.length-3));
    var theWord = theHash.toUpperCase();
    var theLetter = theWord.substr(0,1);
    $("#theWord").text(theWord);
    $("#theLetter").text(theLetter);
    $("#form").hide();
    $("#wordmark").removeClass('hidden');
    $("#social").removeClass('hidden');
  });
  $("#reset").click(function(){
    window.location.reload();
  })
});
