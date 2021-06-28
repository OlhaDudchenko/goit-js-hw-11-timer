import './sass/main.scss';
const days = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]')
const mins = document.querySelector('[data-value="mins"]');
const secs = document.querySelector('[data-value="secs"]');
const timeContainer = document.querySelector('.timer');


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


const timer = {
  start() {
    
    const startTime = new Date("Sep 5, 2021 15:37:25");
    const interval=setInterval(() => {
      const currentTime = Date.now();
      const time = startTime - currentTime;
      days.innerHTML = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

       hours.innerHTML = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      
       mins.innerHTML =pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      secs.innerHTML = pad(Math.floor((time % (1000 * 60)) / 1000));

       if (time < 0) {
        clearInterval(interval);
        timeContainer.innerHTML = "TIME EXPIRED";
    }
    


    }, 1000);
  },
};


console.log(timer.start());




function pad(value) {
  return String(value).padStart(2,'0');
  
}

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

