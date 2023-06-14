// this function will add two values.
function f1() {
    add=10+3;
    document.getElementById("math").innerHTML="10+3=" +add;
}

//this function will do subtration.
function f2() {
    subtract=27-8;
    document.getElementById("subs").innerHTML="27-8=" +subtract;
}
//this function will multifly two numbers.
function f3() {
    multiply=20*2;
    document.getElementById("mult").innerHTML="20*2=" +multiply;
}

//this function will do division.
function f4() {
    division=80/8;
    document.getElementById("divi").innerHTML="80/8=" +division;
}

//this function will multiple math operations together.
function f5() {
    total=(1+2)*4 /3 -1;
    document.getElementById("math1").innerHTML="(1+2)*4 /3 -1=" +total;
}

//this function will return remainder.
function f6() {
    modu=6%5;
    document.getElementById("modulus").innerHTML="6%5=" + modu;
}

//this function will return opposite value.
function f7() {
    unary=10;
    document.getElementById("opposite").innerHTML= -unary;

}

// will represnt incremented value
function increment(){
    var value=document.getElementById("IT").innerHTML;
    value++;
    document.getElementById("Inc").innerHTML= value;
}

//this will represnt decrement value
function decrement(){
var value=document.getElementById("DT").innerHTML;
value--;
document.getElementById("decre").innerHTML= value;
}

//window.alert(Math.random());
window.alert(Math.random()*70);

// Math is static object and it can be used with property. syntax is math.property
function f8(){
document.getElementById("mathstatic").innerHTML=Math.round(4.3);
}

