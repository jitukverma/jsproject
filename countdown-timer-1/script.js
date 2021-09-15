let daysE1=document.getElementById('days');
let hoursE1=document.getElementById('hours');
let minutesE1=document.getElementById('minutes');
let secondE1=document.getElementById('seconds');


const newYears= '1 jan 2021';

function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate = new Date();
    const totalSeconds=new Date(newYearsDate-currentDate)/1000;
    
    const days=Math.floor(totalSeconds / 3600 /24);
     
    const hours=Math.floor(totalSeconds/3600) % 24;
    const mins=Math.floor(totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds) % 60;
       
   daysE1.innerHTML= -(days);
   hoursE1.innerHTML= (-(FormatTime(hours)));
   minutesE1.innerHTML= (-(FormatTime(mins)));
   secondE1.innerHTML=(-(FormatTime(seconds)));
}

function FormatTime(time){
    return time < 10 ? `${time}` : time;
}
countdown();

setInterval(countdown,1000);
