import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  //styleUrls: ['./card.component.scss'],
})
export class Card2Component {
  title = new FormControl('');
  description = new FormControl('');
  updateValues() {
    this.title.setValue('Give new value!');
    this.description.setValue('Give new value!');
  }

  onSubmit() {}
}
