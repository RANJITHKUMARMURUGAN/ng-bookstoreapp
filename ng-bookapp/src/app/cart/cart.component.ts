import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productArray = [
    {
      productId:1,
      img: "../../assets/Book1.png",
      amt: 1500,
      qnt:1
    },
    {
      productId:2,
      img: "../../assets/Book2.png",
      amt: 1500,
      qnt:1
    },
    {
      productId:3,
      img: "../../assets/Book3.png",
      amt: 1500,
      qnt:1
    },
    {
      productId:4,
      img: "../../assets/Book4.png",
      amt: 1500,
      qnt:1
    }
  ];
  inc(prod: any){
    console.log(prod);
  }
  dec(prod: any){
    console.log(prod);
  }
}
