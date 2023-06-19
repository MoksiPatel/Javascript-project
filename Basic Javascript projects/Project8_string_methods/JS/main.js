function Full_sentence(){
var partA=" I am working ";
var partB="towards ";
var partC="my diploma.";
var complete_sentence=partA.concat(partB, partC);
document.getElementById("Concatenate").innerHTML=complete_sentence;
}
function Slice_function() {
    var about="my name is Mayur and i am from India.";
    var name=about.slice(10,16);
    document.getElementById("Slice").innerHTML=name;
}