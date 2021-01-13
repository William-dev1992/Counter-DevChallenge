var dateValue = document.getElementById('date-input');
var dias = document.querySelector('#dias');
var horas = document.querySelector('#horas');
var minutos = document.querySelector('#minutos');


function atualizarCont(){

  var att = setInterval(atualizarCont, 1000)

  var setTime = new Date(dateValue.value).getTime();

  var now = new Date().getTime();
  var timeleft = setTime - now;
        
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours 
  document.getElementById("mins").innerHTML = minutes 
  document.getElementById("secs").innerHTML = seconds
}