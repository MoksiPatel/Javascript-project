function Full_sentence(){
var partA=" I am working ";
var partB="towards ";
var partC="my diploma.";
var complete_sentence=partA.concat(partB, partC);
document.getElementById("Concatenate").innerHTML=complete_sentence;
}

//find position of string by slice method and make it uppercase
function Slice_function() {
    var about="my name is Mayur and i am from India.";
    var name=about.slice(10,16);
    var Uname=name.toUpperCase();
    document.getElementById("Slice").innerHTML=Uname;   
}
//search india position
let about="India is in Asia";
let country=about.search("India");
document.write(country);

//convert number to string

function method_string() {
    var x=15;
    document.getElementById("number_to_string").innerHTML=x.toString();
}
//precision method to round up number close to
function precision_method(){
    var y=123.2889890;
    document.getElementById("Precision").innerHTML=y.toPrecision();

}