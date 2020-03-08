$(document).ready(function(){
  $('#login').addClass("hide")
  $('#mcq1').addClass("hide")
  $('#mcq2').addClass("hide")
  $("#dnd").addClass("hide")
  $("#result").addClass("hide")
  $("#submit").attr("disabled", true);
  $('#quizS').change(function(){
    var selectedItem = $(this).val();
    if(selectedItem == "1")
      $('#login').removeClass("hide")
    else
      $('#login').addClass("hide")
    $('#ID').on('input', function()
  {
    if(checkID()){
      console.log("itrue")
      iBoo = true
    }
    else{
      console.log("ifalse")
      iBoo = false
    }
    
   }
);
$('#email').on('input', function()
{
  if(checkEmail()){
    console.log("etrue")
    eBoo = true
  }
  else{
    console.log("efalse")
    eBoo = false
  }

  if(eBoo && iBoo){
    console.log("show")
    $("#submit").attr("disabled", false);
  }
  else{
    console.log("dont show")
    $("#submit").attr("disabled", true);
  }
}
);
var timeArray = [05, 00]
var timeArray2 = [10, 00]
var timeArray3 = [04, 00]
$("#submit").click(function(){
  $("#login").addClass("hide")
  $("#mcq1").removeClass("hide")
  timeArray = startTimer(timeArray)
});
$("#next").click(function(){
  $("#mcq1").addClass("hide")
  $("#mcq2").removeClass("hide")
  timeArray2 = startTimer(timeArray2)
});
$("#next2").click(function(){
  $("#mcq2").addClass("hide")
  $("#dnd").removeClass("hide")
  timeArray3 = startTimer(timeArray3)
});
$("#next3").click(function(){
  $("#dnd").addClass("hide")
  $("#result").removeClass("hide")
  var q1score = 0
  var q2score = 0
  var q3score = 0
  console.log(document.getElementById('mcq1q1c1').checked)
  if(document.getElementById('mcq1q1c1').checked){
    q1score+=1
  }
  if(document.getElementById('mcq1q2c1').checked){
    q1score+=1
  }
  if(document.getElementById('mcq1q3c4').checked){
    q1score+=1
  }
  if(document.getElementById('mcq1q4c3').checked){
    q1score+=1
  }
  if(document.getElementById('mcq1q5c2').checked){
    q1score+=1
  }
  if(document.getElementById('mcq2q1c1').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q1c2').checked){
    q2score-=1
  }
  if(document.getElementById('mcq2q1c3').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q1c4').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q2c1').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q2c2').checked){
    q2score-=1
  }
  if(document.getElementById('mcq2q2c3').checked){
    q2score-=1
  }
  if(document.getElementById('mcq2q2c4').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q3c1').checked){
    q2score-=1
  }
  if(document.getElementById('mcq2q3c2').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q3c3').checked){
    q2score+=1
  }
  if(document.getElementById('mcq2q3c4').checked){
    q2score+=1
  }
  
$('#tableS').append("<tr><td>"+1+"</td><td>"+q1score+"</td><td>"+(5-q1score)+"</td><td>"+(q1score/5)*100+"</td></tr>");
$('#tableS').append("<tr><td>"+2+"</td><td>"+q2score+"</td><td>"+(8-q2score)+"</td><td>"+(q2score/8)*100+"</td></tr>");
var ctx = document.getElementById('pie1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Group1', 'Group2', 'Group3'],
        datasets: [{
            label: '# of Votes',
            data: [
              q1score, q2score, q3score],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
});


});
$('#send').click(function(){
   var mailBody=document.getElementById('tableS').innerHTML;
   window.location="mailto:"+testTaker.email+"?subject=hii&body="+mailBody;
});
$("#pre").click(function(){
  $("#mcq1").removeClass("hide")
  $("#mcq2").addClass("hide")
  timeArray = startTimer(timeArray)
});
$("#pre2").click(function(){
  $("#dnd").addClass("hide")
  $("#mcq2").removeClass("hide")
  timeArray2 = startTimer(timeArray2)
});



});

function startTimer(timeArray) {
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  if(s==0 && m==0){
    document.getElementById("timer").innerHTML =
    "time ex";
    $(".radio").prop("disabled", true);
  }
  else{
    document.getElementById("timer").innerHTML =
    m + ":" + s;
    setTimeout(startTimer, 1000);
  }
  timeArray[0] = m
  timeArray[1] = s
  return timeArray
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
})
var testTaker = {
  email: "",
  ID: ""
}
function checkID(){
  var ID = $('#ID').val();
  var idTest = new RegExp(/^[s]{1}[0-9]{9}$/);
  var idResult = idTest.test(ID);

  if(idResult == false){
    $('#iErr').removeClass("hide")
  }
  else{
    $('#iErr').addClass("hide")
    testTaker.ID = ID
    return true;
  }
}

function checkEmail(){
  var email = $('#email').val();
  var emailTest = new RegExp(/^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/);
  var emailResult = emailTest.test(email);

  if(emailResult == false){
    console.log("false")
    $('#eErr').removeClass("hide")
  }
  else{
    console.log("true")
    $('#eErr').addClass("hide")
    testTaker.email = email;
    return true;
  }
}