export const tooltipOnHover = (e: any) => {
  if (e.target.classList.contains("dot")) {
    //	Content of dot which is hovered
    var $target = e.target.parentElement.parentElement.nextElementSibling;

    //	Only work with hovered target
    //	Add visible class hovered elem to distinguish
    if ($target) {
      if (!$target.classList.contains("visible")) {
        clearTooltips();
        $target.classList.add("visible");
      } else {
        //	Get viewport offset of tooltip element
        var offset = $target.parentElement.getBoundingClientRect();
        //	Tooltip distance from mouse(px)
        var tipDist = 55;
        //	Calc and set new tooltip location
        $target.style.top = e.clientY - offset.top + tipDist + "px";
        $target.style.left = e.clientX - offset.left + tipDist + "px";
      }
    }
  } else {
    //	Remove visible class
    clearTooltips();
  }
};

const clearTooltips = () => {
  var content = document.getElementsByClassName("content");
  for (var i = 0; i < content.length; i++) {
    content[i].classList.remove("visible");
  }
};
