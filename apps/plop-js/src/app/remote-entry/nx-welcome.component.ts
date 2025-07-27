import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLogicService } from '@ng-mf/plop-js-business-logic';
import { PlopJsBlBuildableComponent } from '@ng-mf/plop-js/bl-buildable';
@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule, PlopJsBlBuildableComponent],
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
        <section>
          <lib-plop-js-bl-buildable></lib-plop-js-bl-buildable>
        </section>
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
