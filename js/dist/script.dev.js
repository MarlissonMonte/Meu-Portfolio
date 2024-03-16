"use strict";

var element = document.querySelector("#text");
var text = "Hello world, Sou Marlisson!";
var interval = 200;

function showText(element, text, interval) {
  var _char = text.split("").reverse();

  console.log(_char);
  var type = setInterval(function () {
    if (!_char.length) {
      return clearInterval(type);
    }

    var next = _char.pop();

    element.innerHTML += next;
  }, interval);
}

showText(element, text, interval);
//# sourceMappingURL=script.dev.js.map
