import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-module',
  templateUrl: './timer-module.component.html',
  styleUrls: ['./timer-module.component.css']
})
export class TimerModuleComponent {

  seconds = 0;
  minutes = 0;
  timerInterval;
  stopped:boolean;

  startTimer() {
    let start = Date.now();
    this.timerInterval = setInterval(() => {
        let delta = Date.now() - start; // milliseconds elapsed since start
        this.seconds = Math.floor(delta / 1000); // in seconds
    }, 1000);
    this.stopped = false;
  }

  resetTimer() {
    this.seconds = 0;
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.stopped = true;
  }

  countTime() {
    this.minutes += 1;
    if (this.seconds = 60) {
      this.seconds = 0;
      this.minutes = 1;
    }
  }
}
