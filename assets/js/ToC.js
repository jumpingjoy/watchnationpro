
/* in line 10 I use "&nbsp;" for make some gap between button name and +. same in line 14. &#43 =+ And &#8722 = - */
function myFunction() {
  var dots = document.getElementById("dot");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button");

  if (dots.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "table of contents &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>&#43;</b> "; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = " table of contents &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>&#8722;</b> "; 
    moreText.style.display = "inline";
  
  }
}