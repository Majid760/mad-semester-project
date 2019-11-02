import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public booksService=[{
    name:"C++",
    author:"Tariq Faqir",
    ibn:'12-23-31234',
    description:'this book build fundamental and advance concepts of programming! ',
    version:'7th',
    date:new Date(),

  },
  {
    name:"Java",
    author:"Mudassir Iqbal",
    ibn:'00-0-300',
    description:' Book build advance concepts of advance programming! ',
    version:'5th',
    date:new Date(),

  },
  {
    name:"C#",
    author:"Majid Ali Khan",
    ibn:'12-23-31234',
    description:'this book build fundamental and advance concepts of graphic programming! ',
    version:'4th',
    date:new Date(),
  },
  {
    name:"PHP",
    author:"Taylor ",
    ibn:'12-23-31234',
    description:'this book build fundamental and advance concepts of web programming! ',
    version:'7th',
    date:new Date(),

  },
  {
    name:"Nodejs",
    author:"Anas Yousaf ",
    ibn:'12-23-31234',
    description:'this book build fundamental and advance concepts of web programming with nob-blocking input/output! ',
    version:'7th',
    date:new Date(),

  }];



  getBook(index){
     
    return this.booksService[index];
  }

  getBooks(){

    return this.booksService;
  }

  addBook(bookObj){
    alert('serviec');

    this.booksService.push(bookObj);
  
  }



  

}
