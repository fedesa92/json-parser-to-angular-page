import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLogicService } from '@ng-mf/plop-js-business-logic';

@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> plop-js demo</span>
          </h1>
        </div>
        <button (click)="demo()">call plop js bl library code</button>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NxWelcomeComponent {
  private _businessLogicService = inject(BusinessLogicService);


  public demo(): void {
    this._businessLogicService.hello();
  }
}
