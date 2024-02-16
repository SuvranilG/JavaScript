const btnStartElement = document.querySelector('#start');
const btnStopElement = document.querySelector('#stop');
const btnResetElement = document.querySelector('#reset');
let docHours = document.querySelector('.hours');
let docMinutes = document.querySelector('.minutes');
let docSeconds = document.querySelector('.seconds');
let docMilliseconds = document.querySelector('.milliseconds');
let displayTimer=document.querySelector('#displayTimer');
let timerId;
let time = 0;
let isPaused = false;
let hours=0, minutes=0, seconds=0, milliseconds=0;


const updateDisplayTimer=(hours, minutes, seconds)=>{
    docHours.innerHTML = `${hours} hrs`;
    docMinutes.innerHTML = `${minutes} mins`;
    docSeconds.innerHTML = `${seconds} secs`;
    // docMilliseconds.innerHTML = `: ${milliseconds} ms`;
}

// displayTimer.innerHTML=`${hours}hrs:${minutes}mins:${seconds}secs`;
let isRunning = false;


const start = () => {
    timerId = setInterval(() => {
        if (!isPaused ) {
          time++;
          hours = Math.floor(time / 3600);
          minutes = Math.floor((time - (hours * 3600)) / 60);
          seconds = Math.floor((time - (hours * 3600) - (minutes * 60)));
        //   milliseconds = Math.floor((time - (hours * 3600) - (minutes * 60)- (seconds*1000)));
        // Math.floor((time - Math.floor(time)) * 1000); wrong logic
        console.log(`${hours}:${minutes}:${seconds}`);
        // displayTimer.innerHTML=`${hours}hrs:${minutes}mins:${seconds}secs`;
        updateDisplayTimer(hours, minutes, seconds);

        //   time++;
        //   hours = Math.floor(time / 3600);
        //   minutes = Math.floor((time - (hours * 3600)) / 60);
        //   seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
        //   milliseconds = Math.floor((time - Math.floor(time)) * 1000);
        //   console.log(`${hours}:${minutes}:${seconds}:${milliseconds}`);
        //   displayTimer.innerHTML=`${hours}hrs:${minutes}mins:${seconds}secs`;
        // updateDisplayTimer(hours, minutes, seconds, milliseconds);

        }
      isRunning= true;

      }, 1000);

      
}

const stop = () => {
    clearInterval(timerId);
    // time = 0;
    isPaused = false;
    isRunning = false;
}

const reset = () => {
    // clearInterval(timerId);

    time = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    // milliseconds = 0;
    // displayTimer.innerHTML=`${hours}hrs:${minutes}mins:${seconds}secs`;
    console.log(`${hours}hrs:${minutes}mins:${seconds}secs`);
    updateDisplayTimer(hours, minutes, seconds);


}


btnStartElement.addEventListener('click', () => {
    if (!isRunning) {
        start();
    }
  
});

btnStopElement.addEventListener('click',  () => {
  stop();
});

btnResetElement.addEventListener('click', () => {

    
    reset();
});