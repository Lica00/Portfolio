import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
})
export class IconsComponent {

  icon : InputSignal<number | undefined> = input<number>();

}
