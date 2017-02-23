var bg = document.getElementById("change");

bg.onclick = function() 
{
  var bcolor = document.body.style.backgroundColor;
  
  if (bcolor == "#FF4500") 
  {
    document.body.style.backgroundColor = "green";
  } 
else {
    document.body.style.backgroundColor = "blue";
  }
  
}
    