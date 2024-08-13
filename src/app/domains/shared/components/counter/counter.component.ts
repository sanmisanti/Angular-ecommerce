import { Component, Input, SimpleChange } from '@angular/core';

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
  }

  ngOnInit(){
    // After render
    // una vez
    // async, then, fetch
    console.log("ngOnInit")
    console.log("-".repeat(10))
    console.log("duration = ", this.duration)
    console.log("message = ", this.message)
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
  }

}
