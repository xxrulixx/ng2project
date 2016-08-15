import { Component} from '@angular/core';
import { AppBar } from '../ui';
import { Storage } from './storage';

@Component({
    selector: 'main-container',
    directives: [ AppBar, Storage ],
    template: `<div>
                <app-bar></app-bar>
                <main class="Main">
                    <storage-container></storage-container>
                </main>
               </div>`
})
export class Main {

}