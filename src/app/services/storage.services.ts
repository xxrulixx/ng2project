import { Category, Product } from '../models';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageServices {
   
  products = [{ id: 1, name: 'Raul Product1', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 2 },
               { id: 2, name: 'Raul Product2', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 1 },
               { id: 3, name: 'Raul Product3', description: 'this is a nice product', cost: '20.00', price: '40.00', categoryid: 4 }
             ];

  categories = [ {id: 1, name: 'test 1' },
                 {id: 2, name: 'test 2'},
                 {id: 3, name: 'test 3'},
                 {id: 4, name: 'test 4'},

             ]; 


    constructor( ) { }

    getProducts()
    {
        return this.products;
    }

    getProductById(id: number): Product()
    {

    }
   
}