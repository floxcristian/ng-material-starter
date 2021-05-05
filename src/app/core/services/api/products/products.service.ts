import { Injectable } from "@angular/core";
import { IProduct } from "@pages/products/models";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: IProduct[] = [
    {
      id: "1",
      image: "assets/images/food/vegetable1.png",
      title: "Repollo",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "2",
      image: "assets/images/food/vegetable2.png",
      title: "Brócoli",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "3",
      image: "assets/images/food/vegetable3.png",
      title: "Zanahoria",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "4",
      image: "assets/images/food/vegetable4.png",
      title: "Remolacha",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "5",
      image: "assets/images/food/vegetable5.png",
      title: "Rábano",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "6",
      image: "assets/images/food/fruit1.png",
      title: "Uva",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "7",
      image: "assets/images/food/fruit2.png",
      title: "Plátano",
      price: 80000,
      description: "bla bla bla bla bla",
    },
    {
      id: "8",
      image: "assets/images/food/fruit3.png",
      title: "Manzana",
      price: 80000,
      description: "bla bla bla bla bla",
    },
  ];

  constructor() {}

  getAll(): IProduct[] {
    return this.products;
  }

  getById(id: string): IProduct {
    return this.products.find((product) => product.id === id);
  }
}
