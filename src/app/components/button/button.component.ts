import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  //the non-null assertion operator (!) to tell TypeScript 
  //that the text and color properties will always have a value, 
  //even though they are not initialized in the constructor. 
  //This works because we know that these properties will be set 
  //from the parent component using Angular's property binding syntax.

  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();

  }

}
