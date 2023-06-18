function Ride_function() {
    var Height, can_ride;
    Height=document.getElementById("Height"). value;
    can_ride=(Height<52) ? "too short, cant ride":" Ok to ride";
    document.getElementById("ride").innerHTML=can_ride


}
function vote_function() {
    var vote, allowed;
    vote=document.getElementById("age"). value;
    allowed=(vote>=18) ? "You can vote":" wait till you turn 18";
    document.getElementById("ride").innerHTML=allowed
}
function vehicle(make, model, year, color) {
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}
 var Jack= new vehicle("Dodge", "viper", "2020","red");
 var Emily =new vehicle ("Jeep", "Trail Hawk","2019","White and Black");
 var Erik =new vehicle ("Ford","Pinto", "1971","Mustard");
 function myfunction(){
    document.getElementById("keyword_and_constructor").innerHTML="Erik drives a "+Erik.vehicle_color+" -colored "+ Erik.vehicle_model+" Manufactured in "+ Erik.vehicle_year;
 }
 function pump(power,make) {
    this.pump_power=power;
    this.pump_make=make;
 }
 var baroda= new pump("25HP","lubi");
 var surat=new pump("50HP","kirloskar");
 function new_pump(){
    document.getElementById("new_and_this").innerHTML= "City baroda has pump with power of "+baroda.pump_power+" made of "+baroda.pump_make;
 }
 function count_function(){
    document.getElementById("Nested_Function").innerHTML=count();
    function count(){
        var starting_count=9;
        function add_one() {starting_count +=1;}
        add_one();
        return starting_count;
    }
 }