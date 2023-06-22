
// Function while loop
function call_loop() {
    var Digit= "";
    var y=1;
    while (y<11) {
        Digit ="<br>"+ y;
        y++;
    }
    document.getElementById("counting_to_ten").innerHTML=Digit;   
}

function find_length() {
    Name="Mayur";
    document.getElementById("Len_str").innerHTML= Name.length;
}

var villages=["Moksi", "Mahapura","Sakarda"];
var content="";
var Z;
function for_loop(){
    for(Z=0; Z<villages.length;Z++) {
        content+=villages[Z] + "<br>";
    }
    document.getElementById("Village_List").innerHTML=content;
}

function Array_Object(){
    var seasons=[];
    seasons[0]="monsoon";
    seasons[1]="summer";
    seasons[2]="winter";
    seasons[3]="Fall";
    document.getElementById("Array_print").innerHTML="Right now it is "+ seasons[1];
}
function constant_function(){
    const Musical_Instrument={type:"guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="500$.";
    document.getElementById("Constant").innerHTML=" The cost of the " +Musical_Instrument.type + " was " + Musical_Instrument.price ;
}
function let_function(){
{let x=40;
document.write(x);}
var x=33
document.getElementById("let_dec").innerHTML="<br>"+ document.write(x);
}


var my_return= multiplication_function(mayur);
function multiplication_function(str) {
  return str;
};
document.getElementById("return1").innerHTML=document.write(my_return);

let house={
    built_year:"1990",
    location_city:"Guelph",
    sq_ft:"1900 sqft",
    style:"Blacksplit",
    description: function() {
        return "This house is build in"+this.built_year+" located in city "+this.location_city +" and build area is "+
        this.sq_ft +" with "+this.style+" style. ";
    }
};
document.getElementById("letobject").innerHTML=house.description();

const make = ["Toyota", "Tesla", "Ford", "Honda"];
let OEM=";"
list: {
  company += make[0] + "<br>";
  company += make[1] + "<br>";
  break list;
  //continue list;
  company += make[2] + "<br>";
  company += make[3] + "<br>";
}
document.getElementById("break_demo").innerHTML= company;
let loopbreak_demo="";
for (let j = 0; j < 5; j++) {
    if (i === 2) { break; } //can use continue here to continue loop to execute.
    display += "The number is " + i + "<br>";
  }
  document.getElementById("loop_break").innerHTML=loopbreak_demo;