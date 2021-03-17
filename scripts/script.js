function addLeadingZero(number){
    if(number < 10){
        return '0' + number;
    }
    return number;
}

function startTime(){

    // code voor klok
    var today = new Date();
    var hours = addLeadingZero(today.getHours());
    var minutes = addLeadingZero(today.getMinutes());
    var seconds = addLeadingZero(today.getSeconds());
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;

    // code voor datum
    document.getElementById("date").innerHTML = datum();

	function datum() {
	var date = new Date(),
	    months = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','November','December'],
	    days = ['Zo','Ma','Di','Wo','Do','Vr','Za'];
	return days[date.getDay()]+'  '+date.getDate()+' '+months[date.getMonth()];

	}

    var time = setTimeout(function(){ 
    	startTime() 
    }, 500);

    // Code voor de animatie rondom de tijd
    function greetingFunction() {
	  var greeting;
	  var time = new Date().getHours();
	  
	  if (time < 6) {
	    greeting = "Slaaplekker";
	  } 

	  else if (time < 12) {
	    greeting = "Goedemorgen";
	  } 

	  else if (time < 18) {
	    greeting = "Goedemiddag";
	  } 

	  else if (time < 24) {
	    greeting = "Goedeavond";
	  } 

	  else {
	    greeting = "Goededag";
	  }
	  
	  document.getElementById("groet").innerHTML = greeting;
	}

	greetingFunction();

	// functie voor het veranderen van de achtergrond
	function backgroundChange() {
	  var time = new Date().getHours();
	  
	  if (time < 6) {
	  	document.body.style.backgroundImage = url('../images/nacht.png');

	  } 

	  else if (time < 12) {
	  	document.body.style.backgroundImage = url('../images/ochtend.png');
	  } 

	  else if (time < 18) {
	  	document.body.style.backgroundImage = url('../images/middag.png');
	  } 

	  else if (time < 24) {
	  	document.body.style.backgroundImage = url('../images/avond.png');
	  } 
	  
	    
	}
	
}
startTime();

var clock = document.getElementById('clock');
clock.classList.add('animation');









