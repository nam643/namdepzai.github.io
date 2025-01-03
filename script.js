// set up text to print, each item in array is new line
var aText = new Array(
"Một năm hạnh phúc vui ngập tràn,", 
"Tình yêu thắp sáng khắp nhân gian.",
"Bao lần giận hờn rồi tha thứ,",
"Cùng bước bên nhau chẳng muốn rời.",
" ",
"Lần đầu gặp gỡ chẳng vấn vương,",
"Chỉ thoáng lướt qua, chẳng bất ngờ.",
"Ngỡ đâu duyên phận buộc hai lối,",
"Giờ đây hạnh phúc hóa chung đường.",
" ",
"Một năm trôi qua ngỡ thật nhanh,",
"Tay nắm tay, nguyện mãi đồng hành.",
"Dẫu cho bão tố hay gian khó,",
"Chỉ cần có nhau, chẳng chông chênh.",
" ",
"Chúc ta mãi mãi chẳng rời xa,",
"Mai sau sống mãi chung một nhà.",
"Giàu sang, phú quý cùng vun đắp,",
"Cuộc sống an lành, mãi thiết tha."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();