import { Component, OnInit } from "@angular/core";
import { ProductsService } from "@core/services/api/products/products.service";
import { IProduct } from "@pages/products/models/product.model";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"],
})
export class ProductsPageComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private _productSrv: ProductsService) {}

  ngOnInit(): void {
    this.products = this._productSrv.getAll();
  }

  goToProductDetail(): void {}

  clickProduct(id: number) {
    console.log("product");
    console.log(id);
  }
}
