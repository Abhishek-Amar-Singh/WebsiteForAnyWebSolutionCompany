var index = 0;
function chngOnNext() {
    var divElement = document.getElementById("tc");
    var idArray = ["tc2","tc3","tc4","tc5", "tc6"];
    document.getElementById("tc").innerHTML = document.getElementById(idArray[index]).innerHTML;
    index++;
    if(index >= idArray.length)
    {
        index=0;
    }
    console.log(index);
}