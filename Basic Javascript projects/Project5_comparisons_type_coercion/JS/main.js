document.write(typeof "mayur"); //this will show the type of data
document.write("five"+55); //this will coercion string and number to concate
console.log(5+8); //this will show addition return on console
function flse(){// this function will return if comparison is false.
    document.getElementById('Fse').innerHTML=document.write(10==5); 
}
function my_true(){// this will return true as comparison is correct.
    document.getElementById('tr').innerHTML=document.write(5==5);
}
function operator_OR(){ //this will return OR operator 
    document.getElementById('ORING').innerHTML= 10==5 || 10<12;
}
function operator_AND(){// this will return for AND operator.
    document.getElementById('ANDING').innerHTML= 5==5 && 5>4;
}
function not_function() {// function for not operator
    document.getElementById("not_false").innerHTML=!(10>2);
}
function not_function1() { //function for not operator for true
    document.getElementById("not_true").innerHTML=!(10<2);
}
function comparision(){ // triple comparision 
x=10
y="10"
document.getElementById("op_false").innerHTML= x===y;
}