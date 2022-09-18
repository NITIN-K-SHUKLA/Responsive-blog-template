function disp1(){
    var radio = document.querySelector(".easy").checked;
    if(radio)
    {
        document.querySelector(".eas").style.display="block";
        document.querySelector(".med").style.display="none";
    }
}
function disp2(){
    var radio = document.querySelector(".medium").checked;
    if(radio)
    {
        document.querySelector(".med").style.display="block";
        document.querySelector(".eas").style.display="none";
    }
}