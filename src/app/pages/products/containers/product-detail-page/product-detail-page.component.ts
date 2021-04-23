// Angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
// Service

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.scss"],
})
export class ProductDetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute //private _productSrv: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log("params: ", params);
      const id = params.id;
      //this.product = this._productSrv.getProduct(id);
    });
  }
}
