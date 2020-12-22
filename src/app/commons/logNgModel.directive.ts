import { Directive, OnInit, Input, HostListener } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Subscriber } from "rxjs";

@Directive({
  selector: "[logNgModel]"
})
export class LogNgModelDirective implements OnInit  {
  constructor(private ngModel: NgModel) {}

  ngOnInit(): void {
    console.log(this.ngModel);
  }

  @HostListener('change', ['$event.target'])
  onChanges(e) {
    console.log(e);
  }
}
