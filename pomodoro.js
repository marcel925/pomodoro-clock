var interval;
  
var intervalBreak;

var counter = 0;

	  var counterBreak = 0;

    var timeLeft;

    var timeSet;

var timeChange = "yes";
  
  document.getElementById("sessionMinus").onclick = function(){
            
    counter = 0;
    
    timeChange = "yes";
    
    clearInterval(interval);
    interval = undefined;
        
    var currentTime = parseInt(document.getElementById("sessionTime").innerHTML);

    if (currentTime > 1) {
      document.getElementById("sessionTime").innerHTML = currentTime - 1;
    }
    
    else {  
      document.getElementById("sessionTime").innerHTML = 60;
    }
    
    document.getElementById("countdownSessionButton").innerHTML = document.getElementById("sessionTime").innerHTML + ":00";
    
    }
  
  
  document.getElementById("sessionPlus").onclick = function(){
    
    counter = 0;
    
    timeChange = "yes";
    
    clearInterval(interval);
    interval = undefined;
          
    currentTime = parseInt(document.getElementById("sessionTime").innerHTML);

    if (currentTime < 60) {
      document.getElementById("sessionTime").innerHTML = currentTime + 1;
    }
    
    else {  
      document.getElementById("sessionTime").innerHTML = 1;
    }
    
    document.getElementById("countdownSessionButton").innerHTML = document.getElementById("sessionTime").innerHTML + ":00";    
    
    }
  
  
  document.getElementById("breakMinus").onclick = function(){
       
    counter = 0;
    
    timeChange = "yes";
    
    clearInterval(intervalBreak);
	interval = undefined;
      
    currentTime = parseInt(document.getElementById("breakTime").innerHTML);

    if (currentTime > 1) {
      document.getElementById("breakTime").innerHTML = currentTime - 1;
    }
    
    else {  
      document.getElementById("breakTime").innerHTML = 60;
    }
      
    document.getElementById("countdownBreakButton").innerHTML = document.getElementById("breakTime").innerHTML + ":00";      
    
    }
  
  
  document.getElementById("breakPlus").onclick = function(){
          
    counter = 0;
    
    timeChange = "yes";
    
    clearInterval(intervalBreak);
    interval = undefined;
    
    currentTime = parseInt(document.getElementById("breakTime").innerHTML);

    if (currentTime < 60) {
      document.getElementById("breakTime").innerHTML = currentTime + 1;
    }
    
    else {  
      document.getElementById("breakTime").innerHTML = 1;
    }
    
    document.getElementById("countdownBreakButton").innerHTML = document.getElementById("breakTime").innerHTML + ":00";
    
    }
   
  // code above controls pluses & minuses for session & break
  // code below controls clicking on green bell pepper button
  
  
  function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  if (sec < 10) {
    return min + ":0" + sec;
  }
  return min + ":" + sec;
 // return nf(min, 2) + ":" + nf(sec, 2);
}
  
  
  document.getElementById("countdownSessionButton").onclick = function(){
    
    if (interval != undefined) {
      clearInterval(interval);
      interval = undefined;
      counter = 0;
    }
    
    else {
                                                        
    var counter = 0;
      
       timeLeft = parseInt(document.getElementById("countdownSessionButton").innerHTML) * 60 + 60;
      
    timeSet = parseInt(document.getElementById("breakTime").innerHTML) * 60;
      
      if (timeChange == "yes") {
        timeLeft = parseInt(document.getElementById("countdownSessionButton").innerHTML) * 60;
      }
    
    interval = setInterval(countDownSession, 1000);
	
	}
}
	
 var counter = 0;
    
    function countDownSession() {
            
      counter++;	  
      
      timeChange = "no";
      
      document.getElementById("countdownSessionButton").innerHTML = convertSeconds(timeLeft - counter);
      
      if (timeLeft == counter) {
      document.getElementById("countdownSessionButton").innerHTML = "Take break!";
      
      clearInterval(interval);
      
      counter = 0;
        
      document.getElementById("myAudio").play(); 
	  
	  counterBreak = 0;
	  
    
    intervalBreak = setInterval(countDownBreak, 1000);
	
	}
	
}

    
    function countDownBreak() {
	
	counterBreak++;
	
	var timeLeftBreak = parseInt(document.getElementById("countdownBreakButton").innerHTML) * 60;
  
	document.getElementById("countdownBreakButton").innerHTML = convertSeconds(timeLeftBreak - counterBreak);
      
      if (timeLeftBreak == counterBreak) {
      document.getElementById("countdownBreakButton").innerHTML = "Work Again!";
      
      clearInterval(intervalBreak);
      
      counterBreak = 0;
        
      document.getElementById("myBreakAudio").play(); 
        
    }
    
}
	

document.getElementById("instruction").onclick = function() {

  if (document.getElementById("instructionPara").style.display == "block") {
    document.getElementById("instructionPara").style.display = "none";
  }
  
  else {
  document.getElementById("instructionPara").style.display = "block";
  }
}
