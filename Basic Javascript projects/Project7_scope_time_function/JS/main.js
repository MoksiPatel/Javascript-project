function local_variable(){
    var X=15;
    document.getElementById("local").innerHTML=document.write(X+10);
}
var Y=Mayur;
function global_variable(){
    document.getElementById("anytime_var").innerHTML=document.write(Y="Patel");
}
function error_variable(){
    document.getElementById("Err").innerHTML=console.log(Y);
}
function get_date(){
    if (new Date().getHours() > 18) {
    document.getElementById("Greeting").innerHTML="How are you today?";
}
}
function Drive_right(){
    var age=20
    if(age>=18) {
        document.getElementById("can_drive").innerHTML="Eligibile to drive";
    }
}
function Age_function(){
    Age=document.getElementById("Age"). value ;
    if(Age>=18){
        Vote="You are old enough to vote."
    }
    else {
    Vote="You are not old enough to vote."
    }
    document.getElementById("how_old").innerHTML= Vote;
     
}
function Approval(){
    credit=document.getElementById("credit"). value ;
    if(credit >= 700) {
        result= "You can get Mortage";
    }
    else {
        result="You can not get Mortage";
    }
    document.getElementById("outof800").innerHTML=result;
}
function time_function(){
    var time=new Date().getHours();
    var Reply;
    if ( time<12 == time>0){
        Reply=" it is morning";
    }
    else if(time>12 == time<6) {
        Reply="it is afternoon";
    }
    else{
        Reply="it is evening";
    }
    document.getElementById("time_of_day").innerHTML= Reply;
}