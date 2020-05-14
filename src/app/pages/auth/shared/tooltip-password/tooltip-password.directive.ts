// https://stackblitz.com/edit/angular-s7zevt
// https://medium.com/angular-in-depth/building-tooltips-for-angular-3cdaac16d138

// Problems:
// + https://stackoverflow.com/questions/50655436/unable-to-setattribute-disabled-using-renderer2-on-angular-material-select
import { Directive, ElementRef, HostListener, Input, TemplateRef, Renderer2 } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTooltipPassword]'
})
export class TooltipPasswordDirective {

  //@ViewChild('exLoc') exLoc: MatSelect;
  matTool;
  SHOW = 'Mostrar contraseña';
  HIDE = 'Ocultar contraseña';
  contentTooltip: string = this.SHOW;

  private _hideTooltip;
  @Input() 
  set hideTooltip(hideTooltip: boolean) {
    setTimeout(() => {
      if (hideTooltip) this.contentTooltip = this.SHOW;
      else this.contentTooltip = this.HIDE;
      console.log(this.contentTooltip);
    }, 100);
    this._hideTooltip = hideTooltip;
  }

  get hideTooltip(): boolean { return this._hideTooltip; }
  
  //contentTemplate: TemplateRef<any>;

  /*
  @HostListener('click')
  toggleButton() {
    console.log("click on directive...");
    // this.hideTooltip = !this.hideTooltip;
    // setTimeout(() => {
    //   if (this.hideTooltip) this.contentTooltip = this.SHOW;
    //   else this.contentTooltip = this.HIDE;
    // }, 100);
  }*/

  mati: MatTooltip;
  constructor(
    private el: ElementRef,
    public renderer: Renderer2
  ) { 
    
    //this.mati = this.el.nativeElement;
    // get the button
    console.log("disabling matTooltip");
    console.log(this.mati);
    //this.mati.message = 'oopa';
    //this.renderer.setProperty(this.matTool, 'disabled', 'true');
    this.renderer.setAttribute(this.el.nativeElement, 'matTooltip', "true");
    //this.el.nativeElement.disabled = true;
  }

}
