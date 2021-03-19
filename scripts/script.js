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

	
}
startTime();

// functie voor het veranderen van de achtergrond
function backgroundChange() {
	var tijd = new Date().getHours();
	var ochtend = url('../images/ochtend.png');
	var middag = url('../images/middag.png');
	var avond = url('../images/avond.png');
	var nacht = url('../images/nacht.png');
	  
	if (tijd < 6) {
	  document.getElementsByTagName("body").style.backgroundImage = nacht;
	} 

	else if (tijd < 12) {
	  document.getElementsByTagName("body").style.backgroundImage = ochtend;
	} 

	else if (tijd < 18) {
	  document.getElementsByTagName("body").style.backgroundImage = middag;
	} 

	else if (tijd < 24) {
	document.getElementsByTagName("body").style.backgroundImage = avond;
	} 	    
}

backgroundChange();






