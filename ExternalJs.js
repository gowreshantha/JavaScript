function ExternalIsEven(){
var input = document.getElementById("textbox1").value;
if(isNaN(input))
{
    document.getElementById("textbox1").style.backgroundColor = "red";
    alert("Enter a valid number");
}else{
    if(input%2 == 0)
    alert(input+" is EVEN");
    else    
    alert(input+" is ODD");
}
}