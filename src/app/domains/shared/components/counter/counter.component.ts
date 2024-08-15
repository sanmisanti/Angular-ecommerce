import { Component, Input, signal, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0)
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC => Nada que tenga demora => Solo declaracion de variables
    // Before render, una vez
    console.log("Constuctor")
    console.log("-".repeat(10))
  }

  ngOnChanges(changes: SimpleChange){
    // Before and during render
    console.log("ngOnChanges")
    console.log("-".repeat(10))
    console.log(changes)
    console.log("-".repeat(10))

    if('duration' in changes){
      const duration = changes['duration'] as SimpleChange;
      if (duration.currentValue !== duration.previousValue){
        this.doSomething();
      }
    }

  }

  ngOnInit(){
    // After render
    // una vez
    // async, then, fetch
    console.log("ngOnInit")
    console.log("-".repeat(10))
    console.log("duration = ", this.duration)
    console.log("message = ", this.message)

    this.counterRef = window.setInterval(()=> {
      console.log("run interval")
      this.counter.update(statePrev => statePrev + 1)
    }, 1000)
  }

  ngAfterViewInit(){
    // after render
    // after child render
    console.log("ngAfterViewInit")
    console.log("-".repeat(10))
    
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
    console.log("-".repeat(10))
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log("doSomething")
    // async
  }

}
