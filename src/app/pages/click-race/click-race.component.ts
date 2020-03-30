import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { timer, fromEvent, Observable, Subscription } from 'rxjs';
import { takeWhile, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-click-race',
  templateUrl: './click-race.component.html',
  styleUrls: ['./click-race.component.scss']
})
export class ClickRaceComponent implements OnInit, OnDestroy {
  // static is set to true because the button is not in a dynamic view
  @ViewChild('button', { static: true, read: ElementRef }) button: ElementRef;
  private subs: Subscription = new Subscription;
  clickCounter: number = 0;
  time: number = null;
  highScore: number = this.getScore();
  hasGameStarted: boolean = false;
  hasGameFinished: boolean = false;

  constructor() { }

  ngOnInit() {
    this.subs.add(this.clickCounting$().subscribe(() => this.clickCounter++));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  clickCounting$(): Observable<any> {
    return fromEvent(this.button.nativeElement, 'click').pipe(
      tap(() => {
        if (!this.hasGameStarted) {
          this.hasGameStarted = true;
          this.subs.add(this.timer$().subscribe(val => {
            this.time = 5 - val;
          }));
        }
      }),
      takeWhile(() => this.time > 0)
    );
  }

  timer$(): Observable<any> {
    this.time = 5;
    return timer(0, 1000).pipe(
      takeWhile(val => val <= 5),
      finalize(() => this.showScore())
    );
  }

  setScore(): void {
    localStorage.setItem('score', this.clickCounter.toString());
  }

  getScore(): number {
    // the + converts the string to a number. 
    // If it is null, it converts null to 0
    return +localStorage.getItem('score');
  }

  showScore(): void {
    if (this.clickCounter > this.highScore) {
      this.setScore();
      this.highScore = this.clickCounter;
    }
    this.time = null;
    this.hasGameFinished = true;
  }

  resetGame(): void {
    this.hasGameFinished = false;
    this.hasGameStarted = false;
    this.clickCounter = 0;
    this.subs.add(this.clickCounting$()
      .subscribe(() => this.clickCounter++));
  }

}
