import { Pipe, PipeTransform } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Pipe({
  name: "clpCurrency",
})
export class ClpCurrencyPipe extends CurrencyPipe implements PipeTransform {
  transform(value: number | string | null | undefined, ...args): any {
    const result = super.transform(value, ...args);
    const currencyCode = args ? args[0] : null;
    return currencyCode === "CLP" ? result.replace(/,/g, ".") : result;
  }
}
