import { Directive, OnInit, Input } from "@angular/core";
import { HelloComponent } from "../hello.component";

@Directive({
  selector: "[appUpperName]"
})
export class UpperNameDirective implements OnInit {
  @Input() appent: String;
  constructor(private helloComponent: HelloComponent) {}

  ngOnInit(): void {
    this.helloComponent.name =
      this.helloComponent.name.toUpperCase() + this.appent;
  }
}
