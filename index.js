


  
$(window).mousemove(function(event) {
  var eye = $(".eye");
  var Reye = $(".Reye");
  var eyeover = $(".eye-over");
  var Reyeover = $(".Reye-over");

  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var xR = (Reye.offset().left) + (Reye.width() / 2);
  var yR = (Reye.offset().top) + (Reye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var radR = Math.atan2(event.pageX - x, event.pageY - y);

  var rot = (rad * (180 / Math.PI) * -1) + 180;
    var rotR = (radR * (180 / Math.PI) * -1) - 180;

  console.log(event.pageX);
  console.log(event.pageY);

   eye.css({
   '-webkit-transform': 'rotate(' + rot + 'deg)',
   '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
   Reye.css({
   '-webkit-transform': 'rotate(' + rotR + 'deg)',
   '-moz-transform': 'rotate(' + rotR + 'deg)',
    '-ms-transform': 'rotate(' + rotR + 'deg)',
    'transform': 'rotate(' + rotR + 'deg)'
  });
    eyeover.css({
   '-webkit-transform': 'rotate(' + rot + 'deg)',
   '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
   Reyeover.css({
   '-webkit-transform': 'rotate(' + rotR + 'deg)',
   '-moz-transform': 'rotate(' + rotR + 'deg)',
    '-ms-transform': 'rotate(' + rotR + 'deg)',
    'transform': 'rotate(' + rotR + 'deg)'
  });
  
// $(".eye").on({
 //   mouseover: function() {
  //      $(".eyeover").stop().show(1000);
  //  },
    
  //  mouseout: function() {
      //  $(".eyeover").stop().hide(1000);
  //  }
// })
});
