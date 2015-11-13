var firstValue=prompt("is this a number");
firstValue = parseInt(firstValue);

if(isNaN(firstValue)){
  alert("this is a string");
}
else {
  alert("this is a number");
}
