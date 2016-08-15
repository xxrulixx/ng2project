import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';

@Component ({
    selector: 'category-selector',
    template: `
        <div>
        <span>Categories: </span>
           <select (change)="onSelect($event.target.value)" >
              <option *ngFor="let c of categories" [selected]="c.id == selected" 
               [value]="c.id">{{c.name}}</option>
            </select>
        </div>
    `
})
export class CategorySelector {
 
 @Input() selected;
 @Input() categories: Category[];
 @Output() selectedCategory = new EventEmitter(); 
 
  onSelect(value){
    console.log(value);
     this.selectedCategory.next(value);
}

}