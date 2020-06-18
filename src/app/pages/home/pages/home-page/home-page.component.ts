// Angular
import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
} from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { MatDialog } from "@angular/material/dialog";
import { EditProductPageComponent } from "../edit-product-page/edit-product-page.component";
import { ResourcesService } from "@core/services/api/resources/resources.service";
import { HttpResponse } from "@angular/common/http";

export interface PeriodicElement {
  name: string;
  position: number;
  cost: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", cost: 10079, symbol: "H" },
  { position: 2, name: "Helium", cost: 40026, symbol: "He" },
  { position: 3, name: "Lithium", cost: 6941, symbol: "Li" },
  { position: 4, name: "Beryllium", cost: 90122, symbol: "Be" },
  { position: 5, name: "Boron", cost: 10811, symbol: "B" },
  { position: 6, name: "Carbon", cost: 120107, symbol: "C" },
  { position: 7, name: "Nitrogen", cost: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", cost: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", cost: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", cost: 20.1797, symbol: "Ne" },
  { position: 11, name: "Sodium", cost: 22.9897, symbol: "Na" },
  { position: 12, name: "Magnesium", cost: 24.305, symbol: "Mg" },
  { position: 13, name: "Aluminum", cost: 26.9815, symbol: "Al" },
  { position: 14, name: "Silicon", cost: 28.0855, symbol: "Si" },
  { position: 15, name: "Phosphorus", cost: 30.9738, symbol: "P" },
  { position: 16, name: "Sulfur", cost: 32.065, symbol: "S" },
  { position: 17, name: "Chlorine", cost: 35.453, symbol: "Cl" },
  { position: 18, name: "Argon", cost: 39.948, symbol: "Ar" },
  { position: 19, name: "Potassium", cost: 39.0983, symbol: "K" },
  { position: 20, name: "Calcium", cost: 40.078, symbol: "Ca" },
];

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  @HostListener("window:open", ["$event"])
  onWindowBlur(event: any): void {
    console.log("DOMWindowCreated");
  }
  displayedColumns: string[] = [
    "select",
    "position",
    "name",
    "cost",
    "symbol",
    "action",
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("iframe") iframe: ElementRef;

  constructor(
    public dialog: MatDialog,
    private resourceSrv: ResourcesService
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  removeBlankTargetFromIframe() {
    /*if ($(this).attr('target') == "_blank") {
      $(this).attr('target', '_self');
  }*/
  }

  removeIframeContainer() {
    console.log("removeIframeContainer...");
  }

  getPokemons(event) {
    console.log(
      "iframe: ",
      this.iframe.nativeElement.contentDocument ||
        this.iframe.nativeElement.contentWindow
    );
    /*let frame = document.querySelector("#removeBlank");
    console.log("frame: ", frame);
    let headr = frame.contentWindow.document.getElementsByTagName("head")[0];

    //var head = document.getElementsByTagName("head")[0];
    console.log("head: ", headr);*/
    //(elem=document.getElementById("script_name")).parentNode.removeChild(#)

    // prevent:
    event.preventDefault();
    window.open(
      "https://zapahuira.uta.cl/negocio/INT/INT_abrir_sesion.php?usuario=17557632&id=9euqf4o4h4sinv9am8d6qelu40&prf=2087&area=2&titulo=Gesti%C3%B3n&vi=http://localhost:4200/login-1/17557632/9euqf4o4h4sinv9am8d6qelu40",
      "theFrame",
      "",
      false
    );
    let oldWindowOpen = window.open;
    /*
    window.open = (
      url?: string,
      target?: string,
      features?: string,
      replace?: boolean
    ) => {
      console.log("ejecutando window.open...");
      return oldWindowOpen();
    };
    event.preventDefault();*/
    /*
    this.resourceSrv.getPokemons().subscribe((response: HttpResponse<any>) => {
      console.log("response: ", response);
      let headers = response.headers;
      console.log("headers: ", headers);
      console.log("maybe: ", headers.keys());
      let keys = Object.keys(headers);
      console.log("keys: ", keys);
      console.log(headers["headers"]);
      console.log(headers.getAll("headers"));
      console.log(headers.get("headers"));
      console.log(headers.getAll("set-cookie"));
      console.log(headers.get("set-cookie"));

      //console.log(headers.getAll("set-cookie"));
      //console.log(headers.get("set-cookie"));
    });*/
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }

  editProduct(product) {
    this.openDialogEditProduct(product);
  }

  openDialogEditProduct(product) {
    const dialogRef = this.dialog.open(EditProductPageComponent, {
      data: product,
      height: "400px",
      width: "600px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("result: ", result);
    });
  }
}
