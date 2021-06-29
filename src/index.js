import './sass/main.scss';


class CountdownTimer{

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timeContainer = document.querySelector(this.selector);
    this.timerList = this.timeContainer.children;
    this.days = this.timerList[0].firstElementChild;
    this.hours = this.timerList[1].firstElementChild;
    this.mins = this.timerList[2].firstElementChild;
    this.secs = this.timerList[3].firstElementChild;
  
    this.interval = null;
    this.start();
   }
  start() {

    this.interval=setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.getTimeComponent(time);
      this.stop(time);
    }, 1000);


  }
  getTimeComponent(time) {
 
    this.days.innerHTML = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.mins.innerHTML = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs.innerHTML = this.pad(Math.floor((time % (1000 * 60)) / 1000));
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

 






