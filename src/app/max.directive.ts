import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMax]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator{

  pMax!: number | string;

  constructor(
    private readonly el: ElementRef<HTMLElement>
  ) { }

  @Input('appMax')
  set max(value: number | string) {
    this.pMax = value;
    this.el.nativeElement.setAttribute('max', `${value}`);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value === 'number' && value > this.pMax) {
      console.log("yes");
      return {max: {max: this.pMax}};
    }
    console.log(value);
    console.log(this.pMax);
    return null;
  }

}
