import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "@pages/products/models/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct;
  @Output() clickProduct: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Añadir producto al carrito.
   */
  addToCart() {
    this.clickProduct.emit(this.product.id);
  }
}
