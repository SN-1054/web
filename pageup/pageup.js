// Generated by CoffeeScript 1.10.0
(function() {
  var body, start;

  body = document.body;

  start = {
    x: 0,
    y: 0
  };

  body.ontouchstart = function(e) {
    var next, ref;
    start.x = e.touches[0].clientX;
    start.y = e.touches[0].clientY;
    if (e.target.nodeName !== "A") {
      e.preventDefault();
    }
    next = e.target.nextElementSibling.nextElementSibling;
    if (((ref = next.src) != null ? ref.length : void 0) > 75) {
      return next.src = next.getAttribute("data-src");
    }
  };

  body.ontouchend = function(e) {
    var first_not_top, ref;
    if (e.target.nodeName === "A") {
      return;
    }
    first_not_top = document.querySelector("img:not(.top)");
    if (e.changedTouches[0].clientY - start.y > 60) {
      if (first_not_top) {
        return (ref = first_not_top.previousElementSibling) != null ? ref.className = "" : void 0;
      } else {
        return document.querySelector(".top:last-of-type").className = "";
      }
    } else if (e.changedTouches[0].clientY - start.y <= -60) {
      if (first_not_top !== document.querySelector("body > img:last-of-type")) {
        return first_not_top != null ? first_not_top.className = "top" : void 0;
      }
    }
  };

}).call(this);

//# sourceMappingURL=pageup.js.map
