jQuery(function ($) {
  $(document).ready(function () {
    $("#owl-example").owlCarousel({ items: 1 });
    $('.navbar').stickUp();
  });
});

function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        $('#subliminal').fadeIn('slow');
    }
});



var controller = new ScrollMagic.Controller();

// build scene
var scene1 = new ScrollMagic.Scene({ triggerElement: "#subliminal", offset: '-100' })
// trigger a velocity opaticy animation
.setVelocity("#subliminal", { translateY: -25, opacity: 1 }, { duration: 600 })
.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: ".products"})
.setVelocity(".leftAnim", {translateX: +35, opacity: 1}, {duration: 700})
.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: ".products"})
.setVelocity(".rightAnim", {translateX: -35, opacity: 1}, {duration: 1000})
.addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: ".products"})
.setVelocity(".products", {opacity: 1}, {duration: 2000})
.addTo(controller);
