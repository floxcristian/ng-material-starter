// Angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "@core/services/api/products/products.service";
import { IProduct } from "@pages/products/models/product.model";
// Service

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.scss"],
})
export class ProductDetailPageComponent implements OnInit {
  product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private readonly _productSrv: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this._productSrv.getById(id);
    });
  }
}
