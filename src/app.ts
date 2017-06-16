//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {SharedModule} from './shared.module'
import {MyCurrencyPipe} from './my-currency.pipe'

@Component({
  selector : 'my-app',
  template : `
  <div>
    <h2>Hello {{name}}</h2>
    <span class="fieldname" myHighlight>Your balance is</span>: {{ balanceAmount | myCurrency }}
    <br/>
    <input type="text" [ngModel]="balanceAmount" myCurrencyFormatter (ngModelChange)="changeModel($event)" />
  </div>
  `,
})
export class App {
  name:string;
  constructor(private mycurpipe: MyCurrencyPipe) {
    this.name = 'Martin'
    this.balanceAmount = this.mycurpipe.transform(1234567.89);
  }
  
  private changeModel(ev) {
    this.balanceAmount = ev;
  }
  }
}

@NgModule({
  imports: [ BrowserModule, SharedModule ],
  declarations: [ App ],
  bootstrap: [ App ],
  providers: [MyCurrencyPipe],
})
export class AppModule {}