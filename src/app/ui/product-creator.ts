import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategorySelector } from './category-selector';


@Component({
    selector: 'product-creator',
    directives: [CategorySelector],
    styles: [`
    .product-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .name {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
	
    `],
    template: `
    <div class="product-creator shadow-2">
      <form class="row" (submit)="onCreateProduct()">
        <input
          type="text"
          (focus)="toggleCreationMode(true)"
          [(ngModel)]="newProduct.name"
          name="newProductName"
          placeholder="Product name"
          class="col-xs-10 name"
        >
        <div  *ngIf="creationMode" class="row">
        <input
          type="text"
          [(ngModel)]="newProduct.description"
          name="newProductDescription"
          placeholder="Best seller product last month..."
          class="col-xs-10"
        >
        <input
          type="text"
           [(ngModel)]="newProduct.cost"
          name="newProductCost"
          placeholder="10.00"
          class="col-xs-10"
        >
         <input
          type="text"
           [(ngModel)]="newProduct.price"
          name="newProductPrice"
          placeholder="10.00"
          class="col-xs-10"
        >
         <category-selector [categories]="categories" 
          (selectedCategory)="updateCategoryId($event)"></category-selector>

        <div class="actions col-xs-12 row between-xs">
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
          <button
            (click)="formReset()"
            class="btn-light"
           >
            Cancel
          </button>
          </div>
        </div>
      </form>
    </div>`
})
export class ProductCreator  {

 creationMode: boolean = false;

 newProduct = { id: 0, name: '', description: '', cost: 10, price: 20, categoryid: 1};

 @Input() categories;

 @Output() createProduct = new EventEmitter(); 

  onCreateProduct()
  {
    const { id, name, description, cost, price, categoryid } = this.newProduct;

    if (name && description)
    {
      this.createProduct.next({ id, name, description, cost, price, categoryid })
    }

     this.newProduct = { id: 0, name: '', description: '', cost: 10, price: 20, categoryid: 1};
     this.toggleCreationMode(false);
  }

  formReset()
  {
     this.newProduct = { id: 0, name: '', description: '', cost: 10, price: 20, categoryid: 1};
     this.toggleCreationMode(false);
  }

   updateCategoryId(value){
        console.log(value);
    this.newProduct.categoryid = value;
 }

 toggleCreationMode(value: boolean){
  this.creationMode = value;
 }
  

}