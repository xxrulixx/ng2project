import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategorySelector } from './category-selector';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Component ({
    selector: 'product-element',
    directives: [CategorySelector],
    styles: [`
    .product-element {
  padding: 15px;
  margin: 15px;
  border-radius: 2px;
  width: 100%;
  position: relative;
}
.name {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  color: rgba(0,0,0,0.8);
}
.content {
  text-align: left;
  font-size: 1.1rem;
  font-weight: 200;
}
.icon-expand {
  position: absolute;
  color: black;
  border: 1px solid lightgrey;
  background-color: white;
  font-size: 20px;
  top: -10px;
  left: -10px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer; 
}

.icon-destroy {
   color: black;
  border: 1px solid lightgrey;
  background-color: white;
  font-size: 20px;
  top: -5px;
  rigth: -5px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer; 
 
}
    `],
    template: `
    <div class="product-element shadow-1 col">
        <div class="icon-expand" (click)="onExpand()">
         <i class="material-icons">import_export</i>
        </div>
        <div class="col-xs-12 name">
         {{ product.name }}
        </div>
        <div class="col-xs-12 content" [hidden]="expanded">
           Description: {{ product.description }}<br />
           Cost: {{ product.cost }}<br />
           Price: {{ product.price }} <br />
           <category-selector [categories]="categories" [selected]="product.categoryid"
            (selectedCategory)="updateCategoryId($event)"></category-selector>
             <div class="icon-destroy" id="delete" (click)="onDestroy()" >
                 <i class="material-icons">delete</i>
            </div>
        </div>
       
        </div>
    `
})
export class ProductElement {

 expanded: boolean = true;

 @Input() product: Product;
 @Input() categories: Category[];

 @Output() deleted = new EventEmitter(); 

 toggle() { this.expanded = !this.expanded };

 onExpand() {
    this.toggle();
 }

 onDestroy() {
    this.deleted.next(this.product);
 }

 updateCategoryId(value){
        
    this.product.categoryid = value;
    console.log(this.product);

 
 }
}