function Circle() {
   document.getElementById("syntax").innerHTML = '&lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;circle cx=" " cy=" " r=" " stroke=" " &frasl;&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'block';
   document.getElementById("R").style.display = 'none';
   document.getElementById("E").style.display = 'none';
   document.getElementById("P").style.display = 'none';
   document.getElementById("T").style.display = 'none';
}
function Rect() {
   document.getElementById("syntax").innerHTML = '&lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;rect x=" " y=" " rx=" " ry=" " width=" " height=" " stroke=" " &frasl;&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'none';
   document.getElementById("R").style.display = 'block';
   document.getElementById("E").style.display = 'none';
   document.getElementById("P").style.display = 'none';
   document.getElementById("V").style.display = 'none';
   document.getElementById("T").style.display = 'none';
}
function Ellipse() {
   document.getElementById("syntax").innerHTML = '&lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;ellipse cx=" " cy=" " rx=" " ry=" " stroke=" " &frasl;&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'none';
   document.getElementById("R").style.display = 'none';
   document.getElementById("E").style.display = 'block';
   document.getElementById("P").style.display = 'none';
   document.getElementById("V").style.display = 'none';
   document.getElementById("T").style.display = 'none';
}
function Polygon() {
   document.getElementById("syntax").innerHTML = 'Syntax <br> &lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;polygon  points="x1,y1 x2,y2 x3,y3 x4,y4 x5,y5" stroke=" " fill-rule="evenodd" &frasl;&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'none';
   document.getElementById("R").style.display = 'none';
   document.getElementById("E").style.display = 'none';
   document.getElementById("P").style.display = 'block';
   document.getElementById("V").style.display = 'none';
   document.getElementById("T").style.display = 'none';
}
function Curve() {
   document.getElementById("syntax").innerHTML = 'Syntax <br> &lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;path  d="M x1 y1 q x3 y3 x2 y2" stroke=" " fill="none"&frasl;&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'none';
   document.getElementById("R").style.display = 'none';
   document.getElementById("E").style.display = 'none';
   document.getElementById("P").style.display = 'none';
   document.getElementById("V").style.display = 'block';
   document.getElementById("T").style.display = 'none';
}
function Char() {
   document.getElementById("syntax").innerHTML = 'Syntax <br> &lsaquo;svg x=" " y=" " width=" " height=" "&rsaquo; <br> &emsp; &lsaquo;text  x=" " y=" " transform="rotate(slope x,y)"&rsaquo; &lsaquo;&frasl;text&rsaquo; <br> &lsaquo;&frasl;svg&rsaquo;';
   document.getElementById("C").style.display = 'none';
   document.getElementById("R").style.display = 'none';
   document.getElementById("E").style.display = 'none';
   document.getElementById("P").style.display = 'none';
   document.getElementById("V").style.display = 'none';
   document.getElementById("T").style.display = 'block';
}
