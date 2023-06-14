window.addEventListener("beforeprint", function () {
  var doaElements = document.querySelectorAll("doa");
  doaElements.forEach(function (doaElement) {
    var pElements = doaElement.querySelectorAll("p");
    if (pElements.length > 3) {
      var container = document.createElement("div");
      container.classList.add("doa-container");

      for (var i = 0; i < pElements.length; i += 3) {
        var group = document.createElement("div");
        group.classList.add("doa-group");

        for (var j = i; j < i + 3 && j < pElements.length; j++) {
          group.appendChild(pElements[j]);
        }

        container.appendChild(group);
      }

      doaElement.innerHTML = "";
      doaElement.appendChild(container);
    }
  });
});
