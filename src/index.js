import './sass/main.scss';


class CountdownTimer{

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.interval = null;
    this.start();
    
   }
  start() {
   this.interval=setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.getTimeComponent(time);
    }, 1000);


  }

  getTimeComponent(time) {
    const timeContainer = document.querySelector(this.selector);
    const timerList = timeContainer.children;
    const days = timerList[0].firstElementChild;
    const hours = timerList[1].firstElementChild;
    const mins = timerList[2].firstElementChild;
    const secs = timerList[3].firstElementChild;
     days.innerHTML = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
     hours.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
     mins.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
     secs.innerHTML = this.pad(Math.floor((time % (1000 * 60)) / 1000));
   }
  
stop(time) {
    if (time < 0) {
      clearInterval(this.interval);
      this.timeContainer.innerHTML = "TIME EXPIRED";
    }
  }

  pad(value) {
 return  String(value).padStart(2,'0');
  }
  
}

 console.log(new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
 }));

 






