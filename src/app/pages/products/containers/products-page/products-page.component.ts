import { Component, OnInit } from "@angular/core";
import { IProduct } from "@pages/products/models/product.model";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"],
})
export class ProductsPageComponent implements OnInit {
  products: IProduct[] = [
    {
      id: "1",
      image: "assets/images/food/fruit1.png",
      title: "Camiseta",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "2",
      image: "assets/images/hoodie.png",
      title: "Hoodie",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "3",
      image: "assets/images/mug.png",
      title: "Mug",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "4",
      image: "assets/images/pin.png",
      title: "Pin",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "5",
      image: "assets/images/stickers1.png",
      title: "Stickers",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "6",
      image: "assets/images/stickers2.png",
      title: "Stickers",
      price: 80000,
      description: "bla bla bla bla bla",
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  goToProductDetail(): void {}

  clickProduct(id: number) {
    console.log("product");
    console.log(id);
  }
}
