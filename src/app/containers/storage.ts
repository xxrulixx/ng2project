import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductElement, ProductCreator } from '../ui';
import { Product } from '../models/product';

@Component({
    selector: 'storage-container',
    directives: [ProductElement, ProductCreator],
    styles: [`.products {
  padding-top: 50px;
}
.newproduct {
  margin-bottom: 40px; 
}
`],
    template: `
    <div class="row center-xs products">
        <div class="col-xs-6 newproduct">
            <product-creator [categories]="categories" (createProduct)="onCreateProduct($event)"></product-creator>
        </div>
        <div class="products col-xs-8">
            <div class="col" style="margin: 15px;">
                <product-element [product]="product" [categories]="categories"
                (deleted)="onDeleted($event)"  
                *ngFor="let product of products" >
                </product-element>
            </div>
        </div>

    </div>
    `
})
export class Storage {

   
  products = [{ id: 1, name: 'Raul Product1', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 2 },
               { id: 2, name: 'Raul Product2', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 1 },
               { id: 3, name: 'Raul Product3', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 4 }
             ];

  categories = [ {id: 1, name: 'test 1' },
                 {id: 2, name: 'test 2'},
                 {id: 3, name: 'test 3'},
                 {id: 4, name: 'test 4'},

             ]; 

  onDeleted(product){
      console.log(product);
      this.products = this.products.filter(p => p.id != product.id);
  }

  onCreateProduct(product)
  {
      product.id = this.products.length+1;
      this.products.push(product);
  }

}