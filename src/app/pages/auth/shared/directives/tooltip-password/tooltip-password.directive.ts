// https://stackoverflow.com/questions/42470225/hide-angular-2-material-tooltip-like-ngif
// https://stackblitz.com/edit/angular-s7zevt
// https://medium.com/angular-in-depth/building-tooltips-for-angular-3cdaac16d138

// Problems:
// + https://stackoverflow.com/questions/50655436/unable-to-setattribute-disabled-using-renderer2-on-angular-material-select
// https://github.com/yukwongng/sw/blob/993ef01fbe49e229d4666dc5361eb40822df040e/venice/ui/webapp/src/app/components/shared/directives/errorTooltip.directive.ts
import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewContainerRef,
  NgZone,
  Inject,
  Optional,
} from "@angular/core";
import {
  MatTooltip,
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
} from "@angular/material/tooltip";
import { Overlay, ScrollDispatcher } from "@angular/cdk/overlay";
import { Platform } from "@angular/cdk/platform";
import { AriaDescriber, FocusMonitor } from "@angular/cdk/a11y";
import { Directionality } from "@angular/cdk/bidi";
import { HammerLoader, HAMMER_LOADER } from "@angular/platform-browser";

@Directive({
  selector: "[appTooltipPassword]",
})
export class TooltipPasswordDirective extends MatTooltip {
  SHOW: string = "Mostrar contraseña";
  HIDE: string = "Ocultar contraseña";

  private _hideTooltip;
  @Input()
  set appTooltipPassword(hideTooltip: boolean) {
    setTimeout(() => {
      this.message = this.appTooltipPassword ? this.SHOW : this.HIDE;
    }, 100);
    this._hideTooltip = hideTooltip;
  }
  get appTooltipPassword(): boolean {
    return this._hideTooltip;
  }

  constructor(
    el: ElementRef<HTMLElement>,
    renderer: Renderer2,
    _overlay: Overlay,
    _scrollDispatcher: ScrollDispatcher,
    _viewContainerRef: ViewContainerRef,
    _ngZone: NgZone,
    _platform: Platform,
    _ariaDescriber: AriaDescriber,
    _focusMonitor: FocusMonitor,
    @Inject(MAT_TOOLTIP_SCROLL_STRATEGY) _scrollStrategy: any,
    @Optional() _dir: Directionality,
    @Optional()
    @Inject(MAT_TOOLTIP_DEFAULT_OPTIONS)
    _defaultOptions: MatTooltipDefaultOptions,
    @Optional() @Inject(HAMMER_LOADER) hammerLoader?: HammerLoader
  ) {
    super(
      _overlay,
      el,
      _scrollDispatcher,
      _viewContainerRef,
      _ngZone,
      _platform,
      _ariaDescriber,
      _focusMonitor,
      _scrollStrategy,
      _dir,
      _defaultOptions,
      hammerLoader
    );
  }
}
