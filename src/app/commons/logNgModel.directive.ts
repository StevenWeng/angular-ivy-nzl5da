import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[logNgModel]"
})
export class LogNgModelDirective implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
