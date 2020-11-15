import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      // Show
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Hide
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

}
