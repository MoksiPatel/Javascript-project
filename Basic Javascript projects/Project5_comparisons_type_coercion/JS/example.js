function my_example(){
    document.getElementById("test").innerHTML=0/0;
}
function notano(){
    document.getElementById("numbertest").innerHTML=isNaN("10");
}
function notano1(){
    document.getElementById("numbertest1").innerHTML=isNaN("Mayur");
}
function Ninfinity(){
    document.getElementById("ninfy").innerHTML=document.write(-2E310);
}
function infinity(){
    document.getElementById("infy").innerHTML=document.write(2E310);
}
function boolean(){
    document.getElementById("True").innerHTML=document.write(10>5);
}
