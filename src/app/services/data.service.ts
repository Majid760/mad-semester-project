import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public productsService=[{
    name:"TShirt",
    description:'lorem ipsume the rjekr ',
    Price:'600',
    date:new Date(),

  },
  {
    name:"Shoew",
    description:' lorem ipsume the rjekr! ',
    Price:'6950',
    date:new Date(),

  },
  {
    name:"Caps",
    description:'lorem ipsume the rjekr! ',
    version:'450',
    date:new Date(),
  },
  {
    name:"Laptop",
    description:'lorem ipsume the rjekr ',
    version:'757',
    date:new Date(),

  },
  {
    name:"Shirt",
    description:'lorem ipsume the rjekr lorem ipsume the rjekr ',
    version:'670',
    date:new Date(),

  }];



  getProduct(index){
     
    return this.productsService[index];
  }

  getproducts(){

    return this.productsService;
  }

  addBook(bookObj){
    alert('serviec');

    this.productsService.push(bookObj);
  
  }



  

}
