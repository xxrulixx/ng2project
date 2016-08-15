import { Component } from '@angular/core';
import { Main } from './containers';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

@Component({
  selector: 'app',
  directives: [ Main ], 
  providers: [disableDeprecatedForms(), provideForms()],
  template: `
    <div>
      <main-container></main-container>
    </div>
  `
})
export class App { }
